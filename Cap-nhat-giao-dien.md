# Cập nhật toàn bộ giao diện

Đổi bố cục các trang công khai theo hướng của mẫu tham khảo; giữ nguyên bảng màu xanh, xanh nhạt và kem hiện có.

- Đầu trang hai tầng, tìm kiếm toàn trang, menu điện thoại.
- Trang chủ: banner chọn nội dung, truy cập nhanh, giới thiệu, chuyên mục, tin mới, sự kiện, văn bản, câu hỏi hướng dẫn.
- Tin tức dạng thẻ; thư viện văn bản và danh bạ tổ chức có tìm kiếm, lọc nhóm.
- Trang giới thiệu, hội viên và liên hệ đồng bộ.
- Nội dung chính thức chưa có vẫn để trống, không chép dữ liệu mẫu.
- Giữ nguyên kiểm soát truy cập và chức năng quản trị hiện có. Bản Cloudflare công khai vẫn là bản xem giao diện, chưa có cơ sở dữ liệu quản trị trực tuyến.

Đã kiểm tra TypeScript, build Cloudflare, kiểm thử mô hình dữ liệu và quyền truy cập; kiểm tra trình duyệt desktop và điện thoại 390px.

## Cập nhật website công khai

Chạy file Up-Git.cmd trong thư mục outputs bằng cách nhấp đúp trong File Explorer. Sau khi đẩy Git thành công, chờ Cloudflare build trạng thái Ready rồi mở https://website-hoi.dinhngocson456.workers.dev/ và nhấn Ctrl+F5.

Các thay đổi đã được lưu trong bản Git cục bộ; chưa xác nhận đẩy lên GitHub trong phiên này.
