# Đủ Lành · Website kế hoạch triển khai

Bản kế hoạch ngày 02/10/2026, gồm 12 phần, mục lục, tìm kiếm, 35 bảng, 3 sơ đồ và bản Word tải xuống. Giao diện hỗ trợ điện thoại.

## Sử dụng

Thư mục này là website tĩnh hoàn chỉnh. Triển khai toàn bộ thư mục `du-lanh/` lên dịch vụ hosting tĩnh, chọn `index.html` làm trang đầu. Không cần cài thư viện hay chạy bước build.

Để xem trên máy, chạy `python -m http.server 8000` trong thư mục này rồi mở http://localhost:8000/ .

## Các tệp

- `index.html`: nội dung kế hoạch và mục lục.
- `danh-muc-nguon.html`: danh mục nguồn và giới hạn đọc.
- `style.css`, `app.js`, `favicon.svg`: giao diện và tính năng tìm kiếm.
- `assets/`: ba sơ đồ của kế hoạch.
- `ke-hoach-du-lanh.docx`: bản Word tải xuống từ website.
- `docs/`: bản nguồn Markdown của kế hoạch, danh mục nguồn và prompt.

Khi sửa nội dung kế hoạch, cập nhật trang HTML và bản Word tương ứng. Nếu đổi cấu trúc thư mục, cập nhật đường dẫn tương đối trong hai trang HTML.

## Bản đang hoạt động

https://du-lanh-ke-hoach-trien-khai.panther83868386.chatgpt.site/

Repo này lưu bản website; việc tải mã lên GitHub không tự bật GitHub Pages. Website hiện tại tiếp tục chạy trên địa chỉ trên ở chế độ riêng tư.
