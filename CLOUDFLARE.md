# Cloudflare: bản xem công khai

Bản này phục vụ nhu cầu chia sẻ giao diện cho người khác xem. Chưa có cơ sở dữ liệu hoặc quản trị trực tuyến. Nội dung chính thức vẫn trống theo yêu cầu; không tạo bài viết và số liệu giả. Toàn bộ chức năng quản trị của bản gốc vẫn nằm trong mã nguồn, chưa được nối với Cloudflare riêng.

Trong Workers & Pages, kết nối repository website-hoi, nhánh main:

- Project name: `website-hoi`
- Build command: `pnpm run build:cloudflare`
- Deploy command: `pnpm run deploy:cloudflare`
- Root directory: để mặc định (gốc repository).
- Node.js: 22.13 trở lên. Có thể đặt biến build `NODE_VERSION=24` nếu môi trường mặc định quá cũ.

Chạy Up-Git.cmd trên máy để đẩy commit mới trước khi Deploy. Khi thành công, dùng URL workers.dev thực tế Cloudflare hiển thị, không dùng localhost.

Build Cloudflare tạo cấu hình dist/server/wrangler.json riêng, bỏ các binding Sites giả và bật PUBLIC_PREVIEW. Worker xóa các header xác thực Sites từ người gọi, khóa đăng nhập quản trị ở bản xem công khai; API trả dữ liệu trống. Không tự ý bỏ PUBLIC_PREVIEW để mở quản trị: cần cấu hình D1, R2 và xác thực được kiểm chứng trước.

`pnpm run build` vẫn là bản build gốc dành cho Sites. `pnpm run build:cloudflare` là bản xem công khai trên Cloudflare riêng.
