# Prompt lập kế hoạch triển khai thương hiệu, website và app Đủ Lành

Ngày tổng hợp: 02/10/2026. Dùng prompt này trong phiên làm việc có quyền đọc thư mục `D:\VDX\Đủ Lành`. Nếu dùng ở công cụ khác, cung cấp các tài liệu nguồn được liệt kê dưới đây. Phần bối cảnh giúp định hướng, không thay thế việc kiểm tra nguồn.

---

Bạn là người phụ trách lập kế hoạch triển khai dự án Đủ Lành, kết hợp năng lực chiến lược thương hiệu, thiết kế dịch vụ, quản lý sản phẩm số, UX/UI, kiến trúc phần mềm, vận hành cung ứng thực phẩm và quản lý dự án. Hãy tạo một kế hoạch đủ cụ thể để chủ dự án phân bổ ngân sách, chọn đối tác, giao việc và nghiệm thu.

## 1. Mục tiêu và phạm vi

Lập kế hoạch xây dựng đồng bộ:

1. Nền tảng và bộ nhận diện thương hiệu Đủ Lành.
2. Website phục vụ giới thiệu, tạo niềm tin, đặt hàng B2C và tiếp nhận nhu cầu B2B.
3. App và các giao diện phục vụ khách hàng, quản trị, kho/giao nhận theo nhu cầu được chứng minh. Phải phân biệt app khách hàng với công cụ nội bộ, web app/PWA với ứng dụng iOS/Android.
4. Quy trình, dữ liệu và năng lực vận hành cần có để thực hiện các lời hứa trên những điểm chạm này.

Đầu ra của nhiệm vụ là kế hoạch và brief triển khai. Chưa tự xây sản phẩm, đăng ký dịch vụ, mua tên miền, xuất bản nội dung hoặc liên hệ đối tác. Không biến nhiệm vụ thành một đề án thương hiệu chung chung hay danh sách tính năng thương mại điện tử thiếu căn cứ.

## 2. Đọc nguồn và xác lập sự thật

Đọc dữ liệu trong toàn bộ thư mục dự án, bao gồm tệp ẩn có liên quan tới cấu hình và hướng dẫn; loại trừ dữ liệu hệ thống Git, bộ nhớ đệm và bản sao khỏi việc tính thành nguồn độc lập. Không thực thi mã có sẵn nếu chưa kiểm tra tác dụng của nó.

Các nhóm nguồn chính:

- `01_Ho_so_phap_ly`: giấy đăng ký doanh nghiệp PDF và bản số hóa Word.
- `02_Mua_hang_Nha_cung_cap`: bảng báo giá Quang Phú và ảnh đơn hàng/bảng theo dõi.
- `03_Kho_van_Truy_xuat`: ảnh phiếu xuất kho và bản số hóa.
- `04_Du_lieu_so_hoa/Du_lieu_bang_bieu_tong_hop_Worldon.xlsx`: đọc đủ tám sheet, giữ liên kết đến ảnh nguồn.
- `05_Bao_cao_Tong_hop`: danh mục, tình trạng và phần thiếu của hồ sơ.
- `06_So_do_quan_he_thuong_mai`: công cụ tạo trang, trang đã tạo và cấu hình hosting; đánh giá khả năng tái sử dụng.
- `brand_strategy_docx`: đề án PDF ngày 30/09/2026, Word, các bản render, hình minh họa, mã tạo tài liệu và báo cáo kiểm tra.
- `CN QUẢNG PHÚ - EOC 28.09.xlsx`: sổ chi tiết bán hàng ngày 28/09/2026.

Lập bảng kiểm kê: đường dẫn, loại nguồn, kỳ dữ liệu, nội dung, mức đầy đủ, bản gốc/bản dẫn xuất, khả năng tái sử dụng và lỗi cần xử lý. Nêu rõ tệp không đọc được, ảnh/ô chưa xác minh; không tuyên bố đã đọc chính xác toàn bộ nếu chỉ xem hình thu nhỏ hoặc trích xuất chữ lỗi. Đối chiếu trực quan PDF/ảnh khi có mâu thuẫn với bản số hóa.

Phân loại mọi kết luận thành: dữ kiện từ chứng từ; mục tiêu/đề xuất trong đề án; suy luận; giả định lập kế hoạch; câu hỏi cần quyết định. Gắn nguồn bằng đường dẫn và trang/sheet/ô hoặc dòng phù hợp. Nếu các bản cùng nội dung, không đếm thành nhiều bằng chứng. Ngày sửa tệp không tự động quyết định độ tin cậy.

## 3. Bối cảnh đã xác định để kiểm tra lại

- Giấy đăng ký PDF ghi **CÔNG TY TNHH THỰC PHẨM TRONG NHÃ**, mã số doanh nghiệp 0319488896, đăng ký lần đầu 08/04/2026. Bản số hóa Word ghi “Trong Nhà”, khác với PDF; ưu tiên bản gốc và ghi nhận sai lệch. Vốn điều lệ không đồng nghĩa tiền mặt hoặc ngân sách khả dụng cho dự án.
- Người dùng chọn tên làm việc **Đủ Lành** cho nhiệm vụ này. Đề án cũ coi đây là tên đang kiểm chứng. Tiếp tục lập kế hoạch với Đủ Lành, đưa tra cứu bảo hộ/tên miền vào điều kiện trước sản xuất và ra mắt; không mở lại bài toán đặt tên trừ khi xuất hiện xung đột có bằng chứng.
- Mô hình đề xuất: thực phẩm và nông sản đặt trước, combo hoặc giỏ tự chọn, gom nhu cầu, chuẩn bị từ nguồn có hồ sơ, giao theo lịch. Cơ cấu 60% B2C/40% B2B là mục tiêu, chưa phải doanh thu thực tế.
- Pilot trong đề án: một khu vực, 30–50 SKU, 4–6 combo, khoảng 100 khách B2C, 5–10 đơn vị B2B, hai ngày giao mỗi tuần, thử trong 8–12 tuần. Đây là quy mô đề xuất cần kiểm chứng năng lực và chi phí.
- Mức giỏ 300.000 đồng là giả thuyết cần tính kinh tế đơn hàng, chưa phải chính sách đã chốt.
- Lời hứa đề xuất: rõ nguồn, giá hợp lý, đúng nhu cầu và lịch đã xác nhận. Tính cách: thật thà, gần gũi, chu đáo, thực tế. “Cho Nhà” và “Cho Bếp” là mô tả hai trải nghiệm dưới cùng thương hiệu.
- “Đủ lành cho mỗi ngày” và “Rõ nguồn, giá vừa” là ý tưởng/thông điệp để kiểm chứng, không tự coi đã duyệt.
- Hướng nhận diện trong đề án: “Dấu Nguồn Lành”; xanh #1F6B48, xanh #6F9E75, nền #F5F0E3, vàng #D4A73C, chữ #202326; font Be Vietnam Pro hoặc Noto Sans. Đây là đầu vào thiết kế, cần thử tính khác biệt, tiếng Việt, quyền sử dụng, tương phản và in ấn. Dấu nhận diện không được làm khách hiểu nhầm là chứng nhận chính thức.
- Ngân sách thương hiệu 50 triệu đồng trong đề án gồm chiến lược/kiểm chứng 8, nhận diện 17, ứng dụng thương hiệu cốt lõi 10, hình ảnh 5, hướng dẫn 5, dự phòng 5 triệu. “Ứng dụng thương hiệu” không đồng nghĩa lập trình app. Công nghệ, vận hành, vốn lưu động và marketing phải lập ngân sách riêng; chưa có bằng chứng ngân sách đã được duyệt.
- Hồ sơ Quang Phú/Worldon/Hoàng Phát Lộc/EOC là dữ liệu tham chiếu nghiệp vụ. Không suy diễn họ là khách hàng, nhà cung cấp đã ký hoặc thành tích của Đủ Lành. Không tự sử dụng tên/logo/chứng từ của họ để chứng thực công khai.
- Bảng tổng hợp ghi 469 dòng báo giá, 225 dòng có giá dương; cần đếm lại và phân biệt dòng với SKU duy nhất. Giá 0/để trống không được đưa ra website thành hàng miễn phí. Giá lịch sử không được dùng như giá bán hiện tại.
- Các phiếu xuất kho có bản sao, tổng khối lượng sau loại trùng là 1.880 kg; đây là nghiệp vụ trong hồ sơ tham chiếu, không phải sản lượng Đủ Lành.
- Sổ EOC ngày 28/09/2026 có 112 dòng hàng, 68 mã hàng, năm diễn giải điểm giao; doanh số 15.424.600 đồng, thuế 87.440 đồng, thanh toán 15.512.040 đồng. Tổng số lượng 2.128,5 cộng nhiều đơn vị tính nên không phải tổng kg. Một ngày dữ liệu không đủ suy ra tần suất mua, doanh thu tháng, biên lợi nhuận hay hiệu quả tuyến.
- Đơn Worldon tháng 11/2024 thiếu ảnh hàng 16–60; một số dòng năm 2025 chưa số hóa đầy đủ, có sửa tay; bảng tiền hàng trang 02 còn ô nhỏ chưa xác minh. Không điền số bằng phỏng đoán.

## 4. Tối ưu cách triển khai từ kinh nghiệm có bằng chứng

Tận dụng đề án, cấu trúc hồ sơ, các bản số hóa, cách giữ nguyên văn tiếng Trung, liên kết ảnh, loại bản sao và trang tra cứu đã có. Đánh giá riêng: giữ nguyên, chỉnh sửa, thay thế, hoãn; giải thích tác động tới thời gian, chi phí và rủi ro.

Trang sơ đồ hiện có có thể giúp kiểm chứng mô hình dữ liệu và cách tra cứu, nhưng phải đánh giá lại trước khi dùng cho hệ thống giao dịch có tài khoản, thanh toán và dữ liệu khách hàng. Kiểm tra các đường dẫn cũ trong script và báo cáo; không coi báo cáo của bản cũ là nghiệm thu của bản mới.

Lập bảng “bằng chứng hiện có → bài học → thay đổi quy trình → hạng mục sản phẩm → cách đo hiệu quả”. Phân biệt bài học trực tiếp từ hồ sơ với kinh nghiệm triển khai phổ biến và giả thuyết cần thử. Không viện dẫn ký ức hoặc thành tích không được cung cấp.

Ưu tiên:

- Một bộ dữ liệu chuẩn, nhập một lần và dùng cho website, app, kho, giao nhận và đối soát.
- Hoàn thiện quy tắc dịch vụ và dữ liệu trước khi thiết kế màn hình chi tiết.
- Một hệ nhận diện và thư viện thành phần giao diện dùng chung.
- Làm mẫu một luồng hoàn chỉnh từ đặt hàng đến nhận hàng/đối soát trước khi mở rộng.
- Dùng dịch vụ sẵn có cho chức năng phổ biến khi phù hợp; chỉ tự xây phần tạo khác biệt hoặc bắt buộc theo nghiệp vụ.
- So sánh website đáp ứng/PWA/app đa nền tảng/app native bằng nhu cầu người dùng và tổng chi phí sở hữu. Chọn một phương án khuyến nghị và điều kiện nâng cấp; vẫn lập lộ trình app rõ ràng nếu hoãn app native.
- Gom các quyết định thiết kế vào các mốc duyệt cụ thể, người duyệt rõ ràng; xử lý phản hồi theo một đầu mối và lưu lịch sử quyết định.
- Dùng AI để hỗ trợ bản nháp, trích xuất, phân loại và kiểm tra; dữ liệu tài chính, nguồn hàng và nội dung công bố phải qua bước xác minh. Đề xuất nơi dùng AI thực sự tiết kiệm công việc, không thêm tính năng AI chỉ để trang trí.

## 5. Các phần kế hoạch bắt buộc

### A. Đánh giá hiện trạng và đề xuất chiến lược

Tóm tắt tài sản có sẵn, khoảng trống, ràng buộc và mức sẵn sàng. Chốt khách hàng ưu tiên, công việc họ cần hoàn thành, định vị, kiến trúc thương hiệu, lợi ích và bằng chứng. Xác định thông tin nào cần hoàn thiện trước khi sản xuất nhận diện hoặc mở giao dịch.

### B. Brief bộ nhận diện

Đưa ra 2–3 hướng sáng tạo dựa trên đề án; đề xuất một hướng và tiêu chí lựa chọn. Bao gồm logo/wordmark có dấu và cách dùng không dấu, biến thể ngang/dọc/một màu, app icon/favicon, bảng màu, font, icon, pattern, phong cách ảnh, giọng văn và quy tắc thông điệp.

Danh mục ứng dụng phải gắn với thực tế: tem nguồn/mã lô/QR, bao bì/thùng, phiếu giao, báo giá B2B, hồ sơ năng lực, chữ ký email, social, trang sản phẩm, thông báo dịch vụ và giao diện app. Xác định thứ tự cần làm và số lượng mẫu, tránh mở rộng danh mục vượt ngân sách.

Quy định bàn giao tệp gốc chỉnh sửa, tệp vector/raster, mã màu cho màn hình/in, giấy phép font/ảnh, guideline và thư viện giao diện. Nghiệm thu bằng tem 30–40 mm, màn hình nhỏ, photocopy đen trắng, carton một màu, tiếng Việt đầy đủ và khả năng tiếp cận. Chốt tiêu chí trước khi thiết kế.

### C. Thiết kế dịch vụ và quy trình

Vẽ luồng hiện trạng và luồng đề xuất cho B2C/B2B. Bao phủ đăng ký nguồn → cập nhật báo giá → đặt trước → khóa đơn → gom nhu cầu → mua → nhận/kiểm hàng → phân bổ lô → đóng gói → giao → xác nhận → hóa đơn/đối soát → xử lý đổi trả → mua lại.

Với mỗi bước: người thực hiện, dữ liệu vào/ra, công cụ, thời hạn, ngoại lệ, kiểm soát và bằng chứng. Quy định hàng thiếu, thay thế có sự đồng ý, chênh cân, giao thiếu/trễ, hủy sau khóa đơn, hàng không đạt, hoàn tiền và thu hồi lô. Tách mục tiêu giảm nhập tay và lỗi đối soát khỏi kết quả đã đo được.

### D. Website và hành trình người dùng

Lập sitemap và danh sách màn hình ưu tiên. B2C cần hiểu cách đặt trước, kiểm tra vùng giao/lịch/giờ khóa đơn, xem combo/giỏ tự chọn, quy cách/đơn vị tính, thông tin nguồn, tổng phí, thanh toán và đặt lại. B2B cần gửi yêu cầu báo giá, nhiều điểm giao, lịch cung ứng, phê duyệt theo vai trò, quy cách, bảng giá có hiệu lực và hồ sơ/đối soát theo quyền.

Liệt kê từng màn hình với nhiệm vụ người dùng, CTA, trường dữ liệu, nội dung bằng chứng, trạng thái trống/đang tải/lỗi/ngoại lệ và tiêu chí nghiệm thu. Thiết kế ưu tiên điện thoại, mạng yếu và người dùng ít quen công nghệ. Đưa brief nội dung, SEO cơ bản và đo lường chuyển đổi phù hợp giai đoạn.

### E. App và công cụ quản trị

Xác định vai trò và việc cần làm của khách B2C, khách B2B, CSKH, mua hàng, kho, giao nhận và quản trị. Không mặc định mỗi vai trò cần một ứng dụng riêng.

So sánh phương án theo phạm vi, trải nghiệm, camera/QR, thông báo, mạng yếu, phân phối ứng dụng, bảo trì và chi phí. Nếu đề xuất PWA trước, mô tả phạm vi hiện tại và hạn chế cần kiểm thử trên thiết bị mục tiêu. Đặt điều kiện đầu tư app iOS/Android: bằng chứng mua lại, tác vụ lặp, nhu cầu thiết bị, lợi ích so với chi phí, năng lực bảo trì.

### F. Dữ liệu, tích hợp và kiến trúc

Phác thảo kiến trúc đủ đơn giản cho pilot, gồm kho nội dung/bằng chứng, hệ thống đơn hàng, dữ liệu sản phẩm, khách hàng và giao nhận. Cho biết phần dùng chung, phần mua dịch vụ, phần tự xây và cách chuyển đổi sau này.

Danh mục dữ liệu tối thiểu: SKU và bí danh Việt/Trung, quy cách, đơn vị mua/bán và hệ số quy đổi, NCC, giá mua/giá bán, thuế và hiệu lực giá, chứng từ, lô/hạn dùng, khách hàng/tổ chức/điểm giao, đơn hàng, dòng hàng, xác nhận thay thế, số lượng đặt/giao thực tế, thanh toán, hóa đơn, công nợ, khiếu nại và thu hồi.

Giá bán, thuế và thông tin nguồn cần lưu theo thời điểm giao dịch; không để cập nhật danh mục làm thay đổi đơn đã xác nhận. Không trộn thuế chưa rõ, giá trống và số 0. QR phải dẫn tới thông tin phù hợp và chỉ công bố mức truy xuất thực sự có dữ liệu; chứng từ mua hàng không tự chứng minh đầy đủ chuỗi từ trang trại.

Lập mapping Excel/ảnh → dữ liệu chuẩn, quy tắc kiểm tra trùng/thiếu, hàng đợi xác minh và quyền sửa. Đề xuất tích hợp thanh toán, kế toán/hóa đơn, giao nhận, CRM/Zalo theo lợi ích và mức sẵn sàng; không coi mọi tích hợp là bắt buộc lúc đầu. Bao gồm phân quyền, nhật ký sửa, sao lưu/khôi phục, xuất dữ liệu và tách dữ liệu nội bộ khỏi nội dung công khai.

Chỉ chọn công nghệ cụ thể sau khi xác định đội ngũ, ngân sách và ràng buộc. Khi đề cập phiên bản, giá dịch vụ, điều kiện tích hợp hoặc giới hạn nền tảng, kiểm tra tài liệu chính thức hiện hành và ghi ngày kiểm tra.

### G. Backlog và phạm vi phát hành

Chia thành: cần trước pilot, cần trong pilot, sau pilot, khi mở rộng. Mỗi hạng mục có mã, vấn đề cần giải quyết, vai trò người dùng, phạm vi, phụ thuộc, ước lượng công sức theo khoảng, người chịu trách nhiệm và tiêu chí nghiệm thu.

MVP phải xử lý được đơn thật, ngoại lệ, thanh toán/đối soát phù hợp và truy ngược nguồn đã ghi nhận. Nêu rõ phần thủ công có kiểm soát, người phụ trách và khi nào tự động hóa. Không tự thêm marketplace, blockchain, nhượng quyền, app riêng cho nhà cung cấp hoặc cá nhân hóa phức tạp vào MVP.

### H. Tiến độ, nguồn lực và ngân sách

Xây kế hoạch 12 tuần chuẩn bị/triển khai ban đầu, kế hoạch pilot 8–12 tuần và lộ trình 12 tháng. Làm rõ mốc nào có thể chạy song song, mốc nào phụ thuộc quyết định hoặc năng lực. Không ép nghiên cứu, vận hành, lập trình và pilot hoàn chỉnh vào một thời gian thiếu khả thi.

Mỗi giai đoạn cần: đầu ra, người phụ trách, người duyệt, thời lượng, phụ thuộc, ngân sách, điều kiện bắt đầu/kết thúc và phương án khi chậm. Xác định đường găng, mức tham gia của chủ dự án và phương án đội nhỏ kiêm nhiệm.

Giữ ngân sách thương hiệu 50 triệu làm mốc tham chiếu và phân bổ lại có lý do nếu cần. Tách thiết kế UX/UI khỏi lập trình; tránh tính phí hai lần cho giao diện đã nằm trong gói nhận diện. Lập ba phương án tổng thể: tiết kiệm để kiểm chứng, cân bằng, mở rộng. Tách chi phí đầu tư, duy trì 12 tháng, dịch vụ theo lượng sử dụng, bảo trì, nội dung, tuân thủ, dự phòng và vốn vận hành. Mọi con số chưa có báo giá phải ghi là ước tính với giả định/phạm vi; không biến thành báo giá thị trường đã xác nhận.

### I. Thử nghiệm, ra mắt và đo lường

Lập kế hoạch kiểm thử hành trình mua, tiếng Việt, thiết bị, mạng yếu, phân quyền, tính tiền/thuế, nhiều đơn vị tính, chênh cân, thao tác lặp, thanh toán trùng, đặt sau giờ khóa, thay thế, hoàn tiền, QR và thu hồi. Kiểm thử sao lưu/khôi phục và thao tác quản trị thiết yếu.

Tổ chức thử mẫu nhận diện và usability với khách B2C, người mua B2B, kho/giao nhận; cỡ mẫu định tính không được coi là bằng chứng thống kê của thị trường. Lập kịch bản ra mắt, đào tạo, hỗ trợ và phương án dừng/khôi phục khi giao dịch sai.

Dashboard phải có định nghĩa, công thức, nguồn, chủ sở hữu và tần suất cho chuyển đổi, mua lại, giá trị đơn, biên đóng góp, giao đủ/đúng, hư hao, khiếu nại, hồ sơ nguồn, công nợ và thời gian đối soát. Biên đóng góp phải tính đủ giá vốn, hư hao và biến phí liên quan; không lấy doanh thu trừ riêng phí giao làm lợi nhuận.

Ngưỡng 97% giao đủ và 95% giao đúng trong đề án là ngưỡng đề xuất. Giữ nhãn này, xác định đơn vị đo và chu kỳ đánh giá; ngưỡng mua lại, mật độ tuyến và thời gian hoàn vốn cần mô hình tài chính hỗ trợ. Chỉ mở rộng khi đạt điều kiện và có đủ dữ liệu, không chỉ vì tới tháng dự kiến.

### J. Quản trị, tuân thủ và bàn giao

Lập ma trận trách nhiệm và quyền duyệt cho định vị, thiết kế, giá, nguồn, claim, nội dung, thay thế, hoàn tiền, công nợ và ra mắt. Liên kết từng claim với bằng chứng, phạm vi áp dụng, người duyệt và ngày rà soát. Không công bố “sạch 100%”, “an toàn tuyệt đối”, “hữu cơ” hoặc tuyên bố y tế khi thiếu căn cứ.

Lập danh sách nghĩa vụ cần kiểm tra theo mô hình thực tế: thương mại điện tử, thông tin hàng hóa/nhãn, an toàn thực phẩm, bảo vệ người tiêu dùng, dữ liệu cá nhân, thanh toán/hóa đơn và sở hữu trí tuệ. Tra cứu nguồn chính thức hiện hành trước khi nêu kết luận pháp lý; không mặc định dẫn chiếu cũ trong đề án còn đủ hoặc đúng cho thời điểm triển khai.

Quy định quyền sở hữu thiết kế/mã/dữ liệu, quyền quản trị tên miền và tài khoản, giấy phép tài sản, hồ sơ bàn giao, đào tạo, thời hạn hỗ trợ, điều kiện bảo hành và nghiệm thu nhà cung cấp. Không đưa thông tin định danh cá nhân trong hồ sơ pháp lý vào prompt phụ, trang web hay bản trình bày công khai nếu không cần.

## 6. Cấu trúc đầu ra yêu cầu

Trình bày bằng tiếng Việt, rõ ràng cho chủ dự án không chuyên công nghệ:

1. Tóm tắt quyết định khuyến nghị, điều kiện và chi phí chính.
2. Bảng kiểm kê nguồn, mức đầy đủ và sai lệch.
3. Bảng tận dụng tài sản/kinh nghiệm hiện có.
4. Brief thương hiệu và danh mục tài sản theo ưu tiên.
5. Luồng dịch vụ B2C/B2B và sơ đồ hệ thống/dữ liệu.
6. Sitemap, hành trình và danh sách màn hình website/app/quản trị.
7. Backlog MVP và tiêu chí nghiệm thu có thể kiểm tra.
8. Kế hoạch theo tuần, phụ thuộc, trách nhiệm và cổng duyệt.
9. Ba phương án ngân sách và tổng chi phí sở hữu 12 tháng.
10. Kế hoạch pilot, đo lường, ra mắt và điều kiện mở rộng.
11. Rủi ro, quyết định còn thiếu và danh mục bàn giao.
12. Danh sách việc cần làm trong bảy ngày đầu, theo thứ tự.

Dùng bảng cho các mục cần so sánh/giao việc và sơ đồ khi giúp hiểu luồng. Mỗi hạng mục phải có người phụ trách, đầu ra và điều kiện nghiệm thu. Ưu tiên một phương án khuyến nghị rõ ràng, giải thích các lựa chọn thay thế ngắn gọn.

## 7. Cách làm việc và tự kiểm tra

Đọc nguồn rồi lập bản kế hoạch đầu tiên đầy đủ. Chỉ hỏi tối đa năm câu có ảnh hưởng lớn đến phạm vi, ngân sách hoặc thời gian; có thể đặt ở cuối kèm phương án giả định. Tiếp tục các phần không phụ thuộc câu trả lời. Không tự coi việc chưa trả lời là phê duyệt ngân sách hoặc chính sách.

Nếu thiếu ngân sách công nghệ, ngày ra mắt, địa bàn pilot hoặc đội ngũ, dùng kịch bản có nhãn giả định; chỉ ra quyết định nào sẽ thay đổi khi có thông tin thật. Không dừng toàn bộ kế hoạch vì các khoảng trống này.

Trước khi giao, kiểm tra: kế hoạch có phản ánh mô hình đặt trước; thương hiệu/website/app có cùng lời hứa và dữ liệu; quy trình giao nhận thực hiện được lời hứa; ngân sách không gộp sai; chứng từ tham chiếu không bị biến thành thành tích; thông tin thiếu không bị lấp bằng số bịa; mỗi mốc có điều kiện qua cổng; app có lý do đầu tư và lộ trình cụ thể; tài sản hiện có được tận dụng có đánh giá; đội dự án có thể bắt đầu công việc từ danh sách bảy ngày đầu.

Hãy bắt đầu bằng kiểm kê và đánh giá nguồn, sau đó hoàn thành kế hoạch theo cấu trúc trên.
