# Hướng dẫn vận hành website Hội GDCSSKCĐ VN

Website được xây dựng theo tài liệu “Yêu cầu Thiết kế trang WEB của Hội”. Tên đầy đủ, logo, tên miền riêng, thông tin liên hệ, nội dung chính thức và tài khoản nhận tiền được để trống theo yêu cầu của người dùng. Không có dữ liệu nhân sự, tin tức hoặc khoản thu giả.

## Bắt đầu

Website đã được chạy và kiểm tra cục bộ trên máy này. Mã nguồn trong gói bàn giao có README hướng dẫn cài đặt, áp dụng migration và chạy `pnpm run dev`; sau đó mở http://127.0.0.1:5173/ trong trình duyệt. Đăng nhập cục bộ dùng tài khoản giả lập Seedy, không yêu cầu mật khẩu. Chọn **Quản trị** để nhập dữ liệu; chọn **Cấu hình Hội** để cập nhật thông tin chung và ngân hàng. Nút **Trang thông tin** chuyển về giao diện giới thiệu.

Website trực tuyến chưa được triển khai vì cơ chế phê duyệt chặn việc gửi thông tin xác thực vào tiến trình đồng bộ mã nguồn. Site đã được tạo với cấu hình riêng tư dành cho chủ sở hữu để tiếp tục triển khai khi công cụ cho phép. Chưa có đường dẫn website trực tuyến hoạt động được bàn giao.

## Các phân hệ

1. **Thông tin Hội**: giới thiệu tóm tắt và đầy đủ, địa chỉ, điện thoại, email. Ban lãnh đạo hiển thị từ hồ sơ nhân sự thuộc nhóm Ban Thường trực. Điều lệ và quyết định được quản lý trong Văn bản.
2. **Tin tức và sự kiện**: chính sách và pháp luật, sự kiện Hội, hoạt động đơn vị, hoạt động liên quan. Bài viết ở trạng thái Nháp không hiển thị trong danh sách tin công bố. Chọn Đã công bố khi đã duyệt nội dung.
3. **Tổ chức**: Liên chi hội, Chi hội, Văn phòng TW Hội, Ban chuyên môn, Viện, Trung tâm, Văn phòng đại diện, Doanh nghiệp hội viên, Tạp chí. Trạng thái theo dõi đang hoạt động, tạm dừng, đã giải thể.
4. **Nhân sự**: BCH TW Hội, Ban Thường vụ, Ban Thường trực, lãnh đạo đơn vị, hội viên cá nhân và tổ chức. Quyết định kết nạp hoặc bổ nhiệm có thể ghi số hiệu và đính kèm hồ sơ.
5. **Tài chính**: phí thành lập, hội phí tập thể và cá nhân, đóng góp từ thiện. Khoản thu có hạn đóng và trạng thái chưa đóng, chờ xác nhận, đã xác nhận.
6. **Báo cáo**: ghi kỳ báo cáo, đơn vị, hạn nộp, nội dung, tệp báo cáo và phản hồi. Báo cáo chưa nộp đã qua hạn được đánh dấu trong danh sách và tổng quan quản trị.
7. **Văn bản**: bao phủ các nhóm văn bản trong tài liệu yêu cầu, gồm thành lập và giải thể, chế độ báo cáo, kết nạp, đại hội và bầu cử, bổ nhiệm, phí và hội phí.

## Thao tác

Chọn **Thêm** để tạo hồ sơ. Trường có dấu * là bắt buộc. Chọn biểu tượng bút để sửa, biểu tượng mũi tên để xem chi tiết và thùng rác để xóa sau khi xác nhận. Khi có thay đổi đồng thời, hệ thống yêu cầu tải lại để tránh ghi đè phiên bản mới.

Tìm kiếm hỗ trợ tên, mã và nội dung, kể cả từ khóa tiếng Việt không dấu. Bộ lọc nhóm thu hẹp danh sách. **Xuất CSV** xuất các dòng đang được lọc với tiếng Việt UTF-8 và xử lý ô có thể bị hiểu thành công thức. Có thể mở bằng Excel. Nút in sử dụng hộp thoại in của trình duyệt.

Tệp đính kèm hỗ trợ PDF, DOCX, XLSX, CSV, PNG, JPG, JPEG, tối đa 10 MB. Tệp được lưu trong kho R2; dữ liệu hồ sơ được lưu trong D1. Gỡ tệp chỉ bỏ liên kết khỏi hồ sơ, không xóa ngay tệp trong kho lưu trữ.

## Thu hội phí

Cấu hình đủ ngân hàng, số tài khoản và chủ tài khoản trong Thông tin Hội trước khi hướng dẫn chuyển tiền. Lập khoản thu, ghi hội viên hoặc đơn vị, số tiền, kỳ thu và hạn đóng. Sau khi nhận chứng từ, chuyển trạng thái sang **Chờ xác nhận**. Chỉ chọn **Đã xác nhận** sau khi đối soát với tiền thực nhận tại ngân hàng.

Biểu tượng chuông tải thông báo đóng phí thành tệp văn bản để cán bộ gửi cho đơn vị. Hệ thống hiển thị khoản chưa xác nhận và quá hạn; không tự gửi email hoặc SMS. Chứng từ và mã giao dịch được giữ cùng khoản thu. Chưa có kết nối cổng thanh toán, webhook ngân hàng hay đối soát tự động vì người dùng yêu cầu để trống thông tin nhận tiền. Website không thực hiện giao dịch tiền thật và không tự xác nhận thanh toán.

## Sao lưu và bảo mật

Chọn **Sao lưu dữ liệu** ở thanh quản trị để tải bản JSON của các hồ sơ hiện có. Tệp JSON không chứa nội dung nhị phân của tệp đính kèm; cần lưu thêm tài liệu gốc tại đơn vị. Đây là bản xuất dữ liệu, chưa có chức năng khôi phục tự động. CSV phục vụ đối chiếu và chuyển giao.

Khi triển khai, website sử dụng đăng nhập do nền tảng Sites quản lý với cấu hình riêng tư dành cho chủ sở hữu. Bản cục bộ dùng đăng nhập giả lập để kiểm tra. API đọc dữ liệu và tải tệp yêu cầu đăng nhập; thao tác ghi kiểm tra nguồn yêu cầu. Nhật ký tạo, sửa, xóa được lưu trong bảng audit. Trước khi mở website cho công chúng hoặc nhiều cán bộ, cần triển khai phân quyền theo vai trò và phạm vi đơn vị; không đổi sang công khai khi còn sử dụng mô hình quản trị của phiên bản chủ sở hữu.

## Mô tả cơ sở dữ liệu

### Bảng records

| Trường | Ý nghĩa |
| --- | --- |
| id | UUID của hồ sơ |
| kind | news, documents, organizations, people, reports, finance, settings |
| data | JSON các trường nghiệp vụ, được kiểm tra trên máy chủ |
| created_at | Thời gian tạo theo UTC |
| updated_at | Thời gian cập nhật theo UTC |
| version | Phiên bản tăng sau mỗi lần sửa, chống ghi đè |

### Các trường nghiệp vụ

| Phân hệ | Trường |
| --- | --- |
| Tổ chức | Tên, mã, loại, cấp trên, quyết định thành lập, ngày thành lập, người đứng đầu, tỉnh thành, địa chỉ, email, điện thoại, mã số thuế, trạng thái, ghi chú |
| Nhân sự | Họ tên hoặc tên hội viên tổ chức, mã, nhóm, đơn vị, chức vụ, ngày sinh, chuyên môn, nhiệm kỳ, quyết định, ngày gia nhập hoặc bổ nhiệm, email, điện thoại, địa chỉ, trạng thái, ghi chú |
| Báo cáo | Tên, đơn vị, kỳ, loại, hạn nộp, ngày nộp, người lập, nội dung, trạng thái, phản hồi |
| Tài chính | Nội dung, bên đóng, loại, kỳ, số tiền VND, hạn đóng, ngày thanh toán, mã giao dịch, trạng thái, ghi chú |
| Văn bản | Tên, số ký hiệu, nhóm, ngày ban hành, ngày hiệu lực, cơ quan ban hành, nội dung, trạng thái |
| Tin tức | Tiêu đề, chuyên mục, tóm tắt, nội dung, ngày đăng, ngày sự kiện, địa điểm, trạng thái |
| Thông tin Hội | Tên đầy đủ, giới thiệu tóm tắt và đầy đủ, địa chỉ, điện thoại, email, tên miền, ngân hàng, số tài khoản, chủ tài khoản, hướng dẫn chuyển khoản |

Hồ sơ có thể chứa thêm fileId và fileName để liên kết tệp đính kèm. Các trường được mô tả trực tiếp trong mục “Mô tả các trường dữ liệu” dưới mỗi danh sách trên website. Quan hệ cấp trên, đơn vị và hội viên hiện được ghi bằng văn bản; không có ràng buộc khóa ngoại giữa các hồ sơ nghiệp vụ.

### Bảng files và audit

**files** lưu id, tên tệp, loại MIME, dung lượng, ngày tạo; nội dung tệp nằm trong R2. **audit** lưu id, người thao tác, loại hành động, mã hồ sơ, phân hệ và ngày giờ. Không tạo hoặc thay đổi cấu trúc bảng trong quá trình xử lý yêu cầu; cấu trúc được quản lý bằng migration.

## Những cấu hình cần bổ sung để vận hành chính thức

Cập nhật nội dung và hồ sơ thật; bổ sung logo và tên miền riêng; cấu hình tài khoản nhận tiền hoặc hợp đồng cổng thanh toán nếu cần giao dịch trực tuyến; xác định cán bộ và quyền hạn trước khi mở cho nhiều người. Không cần cung cấp các thông tin này để xem và sử dụng bản cục bộ đã bàn giao.

## Kết quả kiểm tra

Kiểm tra kiểu TypeScript và build sản phẩm đều thành công. Kiểm tra dữ liệu nghiệp vụ và API gồm đăng nhập, chặn nguồn ghi không hợp lệ, tạo/đọc/sửa/xóa, chống ghi đè phiên bản, số tiền, tải tệp R2, tải tệp có kiểm tra đăng nhập và loại tệp đều đạt. Đã kiểm tra giao diện máy tính và điện thoại rộng 390 px, lưu hồ sơ từ biểu mẫu và tìm kiếm tiếng Việt không dấu. Hồ sơ kiểm thử đã được xóa khỏi dữ liệu cục bộ; dữ liệu cục bộ không được đóng gói thành dữ liệu sản xuất.
