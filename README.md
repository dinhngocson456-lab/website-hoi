# Website Hội GDCSSKCĐ VN

Cổng thông tin và quản trị theo tài liệu yêu cầu, gồm thông tin Hội, tin tức, văn bản, tổ chức, nhân sự, báo cáo và tài chính. Dữ liệu chính thức để trống.

## Công nghệ

Vinext và React, Cloudflare Workers, D1 cho hồ sơ và nhật ký, R2 cho tài liệu. Giữ tích hợp Sites trong vite.config.ts và định danh trong .openai/hosting.json khi cập nhật website hiện tại.

## Chạy tại máy

Yêu cầu Node >=22.13 và pnpm 11.25.0. Chạy pnpm install --frozen-lockfile, pnpm run db:generate khi thay đổi schema, rồi pnpm run build. Áp dụng SQL migration vào D1 cục bộ bằng node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_supreme_rafael_vega.sql. Chạy pnpm run dev và mở URL Local được in ra.

Dùng đường dẫn /signin-with-chatgpt?return_to=/ để đăng nhập giả lập cục bộ. Giả lập không được đóng gói vào sản phẩm triển khai.

## Kiểm tra

node --experimental-strip-types scripts/test-model.mjs kiểm tra dữ liệu nghiệp vụ. node node_modules/typescript/bin/tsc --noEmit kiểm tra kiểu. scripts/test-api.mjs kiểm tra API trên cổng 5173 và tạo/xóa dữ liệu kiểm thử cục bộ; chỉ chạy sau khi khởi động preview và áp dụng migration.

## Triển khai

Dùng workflow của Sites để đóng gói và triển khai với D1 và R2. Migration được áp dụng trước khi Worker được phát hành. Bản bàn giao có quyền truy cập riêng tư dành cho chủ sở hữu. Không mở công khai hoặc thêm người dùng trước khi triển khai phân quyền phù hợp.

## Thanh toán

Website theo dõi hội phí, chứng từ và xác nhận thủ công; chưa tích hợp cổng thu tiền hay đối soát ngân hàng tự động. Cần cấu hình thông tin nhận tiền trước khi sử dụng hướng dẫn chuyển khoản.

Xem Huong-dan-van-hanh.md để biết thao tác nghiệp vụ và cấu trúc dữ liệu. Không chứa thông tin đăng nhập hoặc khóa bí mật trong mã nguồn.
