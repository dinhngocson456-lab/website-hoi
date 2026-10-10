import Portal from './portal';
import { getChatGPTUser } from './chatgpt-auth';
import {isAdmin} from './access';
import {env} from 'cloudflare:workers';
export const dynamic = 'force-dynamic';
export default async function Page(){ const readOnly=(env as unknown as {PUBLIC_PREVIEW?:string}).PUBLIC_PREVIEW==='true'; const user=readOnly?null:await getChatGPTUser(); return <Portal readOnly={readOnly} user={user && isAdmin(user) ? {name:user.displayName,email:user.email}:null}/>; }
