# Bản cập nhật giao diện

Tham khảo có chọn lọc trang https://webdmo.onrender.com, giữ tông xanh lá và hệ thống quản trị hiện có.

- Thẻ sứ mệnh và thống kê lấy từ dữ liệu đã cập nhật.
- Các thẻ giới thiệu Hội, hệ thống tổ chức và văn bản nền tảng.
- Lịch sự kiện sắp tới, sắp xếp theo ngày diễn ra.
- Danh sách văn bản mới có hiệu lực.
- Tìm kiếm toàn trang, hỗ trợ từ khóa không dấu.
- Menu cố định, bố cục điện thoại và chân trang liên hệ.
- Giữ trống thông tin chính thức chưa được cung cấp; không sao chép dữ liệu mẫu.

## Truy cập công khai

Bản này bổ sung quyền đọc công khai ở cấp ứng dụng: chỉ tin đã công bố, văn bản không phải dự thảo, thông tin giới thiệu và một số trường cơ bản của đơn vị đang hoạt động. Hồ sơ nhân sự, báo cáo, tài chính và tệp không thuộc nội dung công khai được bảo vệ phía máy chủ. Quản trị sản xuất chỉ dành cho email chủ Site đã xác nhận. Chế độ phát triển vẫn dùng tài khoản giả lập cục bộ; ngoại lệ này chỉ hoạt động khi NODE_ENV là development.

Các hướng dẫn trước đây mô tả website chỉ dùng riêng là trạng thái của bản đầu. Quyền truy cập tại nền tảng hosting chưa được đổi và website chưa xuất bản thành công. Không coi địa chỉ dự kiến là website đã hoạt động.

## Kiểm tra

TypeScript, build và các kiểm thử API, quyền đọc công khai, lưu/sửa/xóa, kiểm tra phiên bản, CSRF và tệp đính kèm đã được chạy. Giao diện đã được xem trên máy tính và kích thước điện thoại; tìm kiếm và trạng thái không có kết quả hoạt động.

## Chạy bản này

Mở thư mục website-hoi trong gói ZIP. Cài dependencies theo README, tạo cơ sở dữ liệu theo Huong-dan-van-hanh.md, rồi chạy pnpm run dev. Trên máy đang dùng trong cuộc trò chuyện, bản có dependencies sẵn nằm tại work/hoi-web.

Việc xuất bản Sites đang bị chặn bởi chính sách phê duyệt của công cụ khi chuyển credential qua stdin. Credential không được ghi vào mã nguồn hoặc gói ZIP.
