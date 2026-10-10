import handler from "vinext/server/fetch-handler";
import { runWithConnectorBinding } from "../lib/connector-context";
import type { ConnectorBinding } from "../lib/connector-contract.mjs";

export default {
  fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext<{ CONNECTORS?: ConnectorBinding }>) {
    if ((env as unknown as {PUBLIC_PREVIEW?:string}).PUBLIC_PREVIEW === 'true') {
      const headers = new Headers(request.headers);
      for (const key of [...headers.keys()]) {
        if (key.startsWith('oai-authenticated-user-')) headers.delete(key);
      }
      request = new Request(request, {headers});
      const path = new URL(request.url).pathname;
      if (['/signin-with-chatgpt','/signout-with-chatgpt','/callback'].includes(path)) {
        return new Response('Bản xem công khai. Phần quản trị chưa được cấu hình trên máy chủ này.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    }
    let binding = ctx.props?.CONNECTORS;
    // Local preview emulates the same request-scoped capability. This branch and
    // the auxiliary service binding are absent from production builds.
    if (import.meta.env.DEV && !binding && env.CONNECTORS) {
      const preview = env.CONNECTORS;
      const expiresAt = Date.now() + 60_000;
      binding = {
        async getContext() {
          if (Date.now() >= expiresAt) return { status: "request_context_expired" };
          return preview.getContext?.() ?? { status: "binding_unavailable" };
        },
        async invoke(connectorId, actionName, args) {
          if (Date.now() >= expiresAt) {
            return { status: "request_context_expired", message: "This request has expired. Please try again." };
          }
          return preview.invoke(connectorId, actionName, args);
        },
      };
    }
    return runWithConnectorBinding(binding, () => handler.fetch(request, env, ctx));
  },
};
