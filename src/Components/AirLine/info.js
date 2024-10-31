import React from "react"
import { useState } from "react"
function ContentInfor(){
    const [selectedContentId, setSelectedContentId] = useState (null);
    const infors2 = [
      {
        id:9,
        question: "Em bé(trẻ sơ sinh) bao nhiêu tháng tuổi thì được đi máy bay?",
        content: (
          <div id="content9" className="bg-dript">
                            <div class="dript">
                                <h4>Xem kĩ thông tin dưới đây</h4>
                                <p>- Em bé từ 14 ngày tuổi trở lên so với ngày khởi hành có thể đi máy bay.</p>
                                <p>- Mỗi cha, mẹ, người giám hộ của trẻ hoặc người được ủy quyền chỉ được đi cùng 01 em bé.</p>    
                                <p>- Các chuyến bay đều giới hạn số lượng em bé nên Hành khách cần kiểm tra tình trạng chỗ của em bé trong 
                                    đơn hàng của mình.</p>
                                <p>- Em bé dưới 30 ngày tuổi, khi đi máy bay cần phải có giấy chứng sinh. Em bé từ 31 ngày tuổi 
                                    trở lên, khi đi máy bay cần phải có giấy khai sinh/ trích lục khai sinh.</p>
                            </div>
                            <img src="image/dript9.png" alt=""/>
                        </div>
        )
      },
      {
        id: 10,
        question: "Tại sao phải tắt điện thoại đi động trên máy bay?",
        content:(
          <div id="content10" className="bg-dript">
          <div class="dript">
              <h4>Quy định bắt buộc</h4>
              <p>- Điện thoại là thiết bị có thể phát ra sóng vô tuyến gây nhiễu hệ thống điện tử nhạy cảm của máy bay. 
                  Giai đoạn cất cánh và hạ cánh của máy bay được xem là 2 giai đoạn quan trọng nhất đối với mỗi chuyến bay 
                  và đòi hỏi phi hành đoàn phải tập trung cao độ, duy trì liên lạc với trạm kiểm soát không lưu ATC và đảm 
                  bảo hoạt động của tất cả các trang thiết bị trên máy bay.</p>
              <p>- Ngoài việc loại trừ nguy cơ gây nhiễu thì việc cấm sử dụng thiết bị điện tử cũng ngăn ngừa khả năng gây 
                  tổn thương cho hành khách trong trường hợp máy bay dằn xóc khi đi vào vùng thời tiết xấu, thiết bị có thể 
                  bị hất văng gây nguy hiểm.</p>    
              <p>- Bên cạnh đó, việc cấm sử dụng các thiết bị điện tử cá nhân trong quá trình cất hạ cánh cũng giúp cho hành 
                  khách tập trung theo dõi các chỉ dẫn an toàn bay hơn 
                  và phi hành đoàn cũng không bị phân tâm khi thực hiện nhiệm vụ của mình.</p>
              <p>- Đối với các chuyến bay Nội Địa Việt Nam, các hãng hàng không hiện tại đều cấm sử dụng điện 
                  thoại di động trên máy bay và cho phép sử dụng một số thiết bị điện tử khác sau khi máy bay đã ổn định độ cao.
              </p>
          </div>
          <img src="image/dript10.png" alt=""/>
      </div>
        )
      },
      {
        id: 11,
        question: "Phụ nữ mang thai đi máy bay cần lưu ý gì?",
        content: (
          <div id="content11" className="bg-dript">
                            <div class="dript">
                                <h4>Hành khách là phụ nữ mang thai cần lưu ý những thông tin sau:</h4>
                                <p>- Hành khách mang thai cần mang theo: giấy khám thai, sổ khám thai, phiếu siêu âm, 
                                    số sức khỏe được bác sĩ xác</p>
                                <p>- Hồ sơ này vẫn được chấp nhận cho chặng bay tiếp theo nếu hành khách là phụ nữ có thai 
                                    không phát sinh vấn đề về sức khỏe trong suốt hành trình.</p>
                                <p>- Hồ sơ thai sản cần có xác nhận của Bác Sĩ Chuyên Khoa với những thông tin cơ bản sau: 
                                    thai đơn hay đôi, sinh ba..., số tuần của thai kỳ, ngày dự kiến sinh, 
                                    tình trạng sức khỏe bà mẹ và thai nhi tốt, được phép đi lại bằng máy bay</p>    
                                <p>- Hành khách mang thai cần khai báo về tình trạng thai kỳ tại quầy làm thủ tục cho nhân 
                                    viên sân bay để được hỗ trợ.</p>
                                <p>- Hành khách mang thai cần tuân thủ các quy định vận chuyển của hãng hàng không.
                                </p>
                                <p>Lưu ý: Đối với các hãng hàng không nội địa Việt Nam, hành khách có thai kỳ từ 32 tuần 
                                    trở lên sẽ bị từ chối vận chuyển. Trong một số trường hợp đặc biệt, hành khách cần liên hệ 
                                    trực tiếp hãng hàng không để được hỗ trợ.</p>
                            </div>
                            <img src="image/dript11.png" alt=""/>
                        </div>
        )
      },
      {
        id: 12,
        question: "Vé khứ hồi, không bay chiều đi cần làm gì?",
        content: (
          <div id="content12" className="bg-dript">
                            <div class="dript">
                                <h4>Hành khách cần lưu ý những thông tin sau:</h4>
                                <p>- Đối với hãng Vietjet Air: hành khách không thực hiện chặng bay đầu tiên, chặng bay tiếp theo vẫn còn 
                                    hiệu lực khởi hành</p>
                                <p>- Đối với hãng Vietnam Airlines và Bamboo Airways: hành khách không thực hiện chặng bay đầu tiên, 
                                    chặng bay tiếp theo sẽ tự động bị hủy mà không thông báo đến hành khách.</p>
                                <p>Do đó, hành khách cần lưu ý, nếu không thực hiện chuyến bay đầu tiên, vui lòng thông báo 
                                    đến nhân viên sân bay / nhân viên đại lý phòng vé hoặc tổng đài 
                                    hãng ghi nhận không thực hiện chặng đi và yêu cầu giữ nguyên chặng về.</p>    
                                <p>Hành khách cần thông báo đến hãng hàng không trước giờ khởi hành ít nhất 06 tiếng để không ảnh hưởng đến chuyến bay còn lại của hành trình.</p>
                            </div>
                            <img src="image/dript12.png" alt=""/>
                        </div>
        )
      }
    ]
    const infors1 = [
      {
        id: 5,
          question: "Đi máy bay cần mang theo những loại giấy tờ gì?",
          content:(
              <div id="content5" className="bg-dript">
                          <div class="dript">
                              <h4>ĐỐI VỚI HÀNH KHÁCH MANG QUỐC TỊCH VIỆT NAM</h4>
                              <p>- Trẻ sơ sinh dưới 02 tuổi: giấy chứng sinh, giấy khai sinh, giấy trích lục khai sinh</p>
                              <p>- Trẻ em từ 02 đến dưới 12 tuổi: giấy khai sinh</p>   
                              <p>- Trẻ em từ 12 đến dưới 14 tuổi: giấy khai sinh</p>   
                              <p>- Người lớn từ 14 tuổi trở lên: chứng minh nhân nhân, thẻ căn cước, hộ chiếu, giấy phép lái xe, 
                                  giấy xác nhận nhân thân...</p> 
                              <h4>ĐỐI VỚI HÀNH KHÁCH MANG QUỐC TỊCH NƯỚC NGOÀI:</h4> 
                              <p>- Hộ chiếu nước ngoài hoặc giấy thông hành, thị thực rời, thẻ thường trú, thẻ tạm trú do Việt Nam cấp 
                                  (lưu ý các loại giấy tờ này phải có dấu xuất, nhập cảnh Việt Nam theo quy định).</p>  
                              <p>- Trong trường hợp hành khách mất hộ chiếu, phải có công hàm của cơ quan ngoại giao, lãnh sự của quốc gia hành khách 
                                  mang quốc tịch hoặc công văn của sở ngoại vụ, cơ quan công an địa phương nơi mất xác nhận nhân thân và việc mất hộ chiếu của 
                                  hành khách, có dán ảnh, dấu giáp lai. Công hàm, công văn xác nhận có giá trị sử dụng 30 ngày kể từ ngày xác nhận.</p>  
                                  <p>Giấy tờ của hành khách sử dụng khi đi tàu bay phải đảm bảo các điều kiện sau:</p>
                                  <p>- Còn giá trị sử dụng.</p>
                                  <p>- Có ảnh đóng dấu giáp lai, trừ giấy khai sinh, giấy chứng sinh của trẻ em, thẻ kiểm soát an ninh, thẻ nhận dạng của các hãng 
                                      hàng không.</p>
                          </div>
                          <img src="image/dript5.png" alt=""/>
                      </div>
          ),
      },
      {
        id: 6,
          question: "Bị mất CCCD thì có được bay không?",
          content:(
            <div id="content6" className="bg-dript">
            <div class="dript">
                <h4>Có thể sử dụng giấy tờ khác thay thế</h4>
                <p>Đối với hành khách là người lớn: nếu bị mất chứng minh nhân dân (thẻ căn cước), hành khách có thể sử dụng 
                    các loại giấy tờ khác thay thế để sử dụng khi bay như: hộ chiếu, giấy phép lái xe, giấy xác
                     nhận nhân thân...</p>
                <p>Giấy xác nhận nhân thân cần được xác nhận trong vòng 07 ngày so với ngày khởi hành của chuyến bay.</p>   
            
            </div>
            <img src="image/dript6.png" alt=""/>
        </div>
          ),
      },
      {
        id: 7,
        question: "Tôi được mang theo bao nhiêu kg hành lý?",
        content: (
          <div id="content7" className="bg-dript">
                            <div class="dript">
                                <h4>Xem kĩ thông tin dưới đây</h4>
                                <p>Tùy vào điều kiện giá vé mà hạng vé của Hành khách có bao gồm hành lý xách tay và hành lý ký gửi, hành khách cần kiểm tra 
                                    điều kiện vé và hành lý đi kèm trên xác nhận của đơn hàng:</p>
                                <p>Đối với hạng vé chỉ bao gồm hành lý xách tay: </p>
                                <p>
                                    - Vietjet Air / Bamboo Airways: mỗi hành khách chỉ được phép tối đa
                                     01 kiện 07kg với kích thước tối đa các chiều 23x36x56cm
                                </p>
                                <p>- Vietnam Airlines:</p>
                                <p>+ Các chuyến bay do Vietnam Airlines và Vasco khai thác: mỗi hành khách chỉ được phép tối đa 01 kiện 10 kgs + 01 phụ kiện 02 kgs với tổng kích thước của hành lý xách tay không được vượt quá 
                                    115cm / 45in (56cm x 36cm x 23cm hoặc 22in x 14in x 9in).</p>
                                <p>+ Các chuyến bay do Pacific Airlines khai thác: mỗi hành khách chỉ được phép tối đa 01 kiện 07kg với kích thước tối đa 
                                    các chiều 23x36x56cm</p>
                                <p>Đối với hạng vé có bao gồm hành lý ký gửi:</p>
                                <p>- Hãng Bamboo Airways: từ hạng vé Bamboo Plus sẽ bao gồm gói hành lý 20kgs trong giá vé.</p>
                                <p>- Hãng Vietjet Air: từ hạng vé Skyboss sẽ bao gồm gói hành lý 30kgs trong giá vé</p>
                                <p>- Hãng Vietnam Airlines: từ hạng vé Phổ Thông Tiêu Chuẩn sẽ bao gồm 01 kiện 23kgs cho mỗi hành khách</p>
                                <p>Lưu ý:</p>
                                <p>- Các gói hoặc kiện hành lý vượt ngoài trọng lượng và số kiện theo quy định cho phép có thể được yêu cầu thanh toán thêm các khoản 
                                    phát sinh tại sân bay</p>
                                <p>- Tùy vào từng chương trình khuyến mãi hoặc điều kiện giá vé khác nhau mà hạng vé có hoặc không bao gồm hành lý ký gửi. 
                                    Hành khách cần kiểm tra với nhân viên tư vấn về gói hành lý của mình trên mỗi 
                                    chuyến bay để có thể sắp xếp hành lý được tốt nhất.</p>
                                <p>- Quý khách cần mua thêm hành lý ký gửi, vui lòng liên hệ iVIVU.com trước ít nhất 06 tiếng trước 
                                    giờ khởi hành và trong giờ hành chính để được hỗ trợ tốt nhất.</p>    
                               
                            
                            </div>
                            <img src="image/dript7.png" alt=""/>
                        </div>
        )
      },
      {
        id: 8,
        question: "Đồ dùng cá nhân nào được mang lên máy bay?",
        content:(
          <div id="content8" className="bg-dript">
                            <div class="dript">
                                <h4>Xem kĩ thông tin dưới đây</h4>
                                <p>Ngoài phụ kiện các nhân, hành lý xách tay theo quy định, một số vật dụng cá nhân hành khách được
                                     phép mang lên máy bay bao gồm:</p>
                                <p>- Ô dù (trừ loại có gậy, hoặc cán ô có đầu nhọn bịt kim loại)</p>    
                                <p>- Một quyển sách hoặc báo/tạp chí</p>
                                <p>- Áo khoác, khăn choàng cổ</p>
                                <p>- Dụng cụ cho hành khách khuyết tật</p>
                                <p>- Xe nôi trẻ em (tùy vào khả năng chất xếp từng loại tàu bay, xe nôi có thể được vận chuyển theo hành lý ký gửi miễn phí)</p>
                                <p>Hành khách cần lưu ý, tất cả các hành lý và phụ kiện, vật dụng cá nhân cần đảm bảo đúng trọng lượng quy định. Vượt quá 
                                    trọng lượng sẽ buộc phải mua thêm hành lý phát sinh tại sân bay.</p>
                            </div>
                            <img src="image/dript8.png" alt=""/>
                        </div>
        )
      }
    ]
    const infors = [
        {
            id: 1,
            question: "Tôi phải đến sân bay trước mấy tiếng",
            content:(
                <div id="content1" className="bg-dript">
                            <div class="dript">
                                <h4>Đối với chuyến bay nội địa:</h4>
                                <p>- Hành khách cần có mặt tại quầy làm thủ tục trước 02 tiếng so với giờ khởi hành</p>
                                <p>- Đối với Hành khách đã làm checkin online, cần có mặt tại quầy làm thủ tục trước ít nhất 01 tiếng so với giờ khởi hành</p>
                                <p>- Thời gian đóng quầy làm thủ tục (kết thúc nhận hành khách) trước 40 phút so với giờ khởi hành</p>
                                <p>- Thời gian đóng cửa lên máy bay (kết thúc nhận hành khách) trước 20 phút so với giờ khởi hành</p>
                                <h4>Đối với chuyến bay Quốc Tế:</h4>
                                <p>- Hành khách cần có mặt tại quầy làm thủ tục trước 03 tiếng so với giờ khởi hành</p>
                                <p>- Thời gian đóng quầy làm thủ tục (kết thúc nhận hành khách) trước 50 phút so với giờ khởi hành</p>
                                <p>- Thời gian đóng cửa lên máy bay (kết thúc nhận hành khách) trước 30 phút so với giờ khởi hành</p>
                                <p>Việc đến sân bay sớm theo quy định của Hãng sẽ giúp hành khách có sự chủ động và có thể có thêm thời gian để xử lý các vấn đề bất khả kháng (Nếu có) xảy ra.</p>
                            </div>
                            <img src="image/dript1.png" alt=""/>
                        </div>
            ),
        },
        {
            id: 2,
            question: 'Check in online rồi thì có cần tới quầy không?',
            content:(
                <div id="content2" className="bg-dript">
                            <div class="dript">
                                <h4>Đối với trường hợp chỉ có hành lý xách tay:</h4>
                                <p>Những hành khách đã làm check in online qua website, ứng dụng điện thoại, kios tại sân bay, 
                                    cần xuất trình Thẻ Lên Tàu Bay (Boarding Pass) tại Cổng Kiểm Soát An Ninh và có mặt trước 
                                    cửa ra máy bay theo thời gian ghi nhận trên thẻ lên máy bay.</p>
                                
                                <h4>Đối với trường hợp có hành lý ký gửi:</h4>
                                <p>Những hành khách đã làm check in online qua website, ứng dụng điện thoại, kios tại sân bay, 
                                    cần phải đến quầy làm thủ tục của Hãng để ký gửi và soi chiếu hành lý ký gửi trước khi đến
                                     cổng kiểm soát An Ninh.</p>
                                <p>Tuy nhiên, trong một số giai đoạn nhất định như Cao Điểm, Lễ, Tết hoặc vì một số lý do đặc 
                                    biệt liên quan đến quy định của các Hãng hoặc Cục Hàng Không. Hành khách đã làm thủ tục 
                                    check in online vẫn có thể được yêu cầu đến quầy làm thủ tục để được
                                     kiểm tra các thông tin liên quan.</p>
                            </div>
                            <img src="image/dript2.png" alt=""/>
                        </div>
            ),
        },
        {
          id: 3,
          question: "Tôi muốn đổi ngày bay và giờ bay thì làm sao?",
          content: (
            <div id="content3" className="bg-dript">
                            <div class="dript">
                                <h4>Hành khách có nhu cầu đổi ngày bay và giờ bay vui lòng liên hệ với nhân viên phụ trách đơn 
                                    hàng của iVIVU.com để được hỗ trợ</h4>
                                <p>Các thông tin cần lưu ý:</p>
                                <p> - Hành khách cần kiểm tra điều kiện vé được hiển thị trên xác nhận đơn hàng</p>
                                <p>- Hành khách cần chuẩn bị sẵn lịch bay mới để nhân viên tư vấn hỗ trợ nhanh nhất</p>
                                <p>- Tham khảo lịch bay mới trên website iVIVU.com với đầy đủ lịch bay mới nhất của Hãng</p>
                                <p>
                                - Giá vé mới cần đổi không thể giữ chỗ, nên hành khách cần quyết định nhanh và thanh toán 
                                để tránh các chi phí thay đổi liên tục.
                                </p>
                                <p>
                                    - Thời gian đổi vé cần được thực hiện trước khi hãng đóng chuyến nên Hành khách cần liên hệ 
                                    với iVIVU.com trước ít nhất 06 tiếng so với giờ khởi hành (trong giờ hành chính)
                                </p>
                            </div>
                            <img  src="image/dript3.png" alt=""/>
                        </div>
          )
        },
        {
          id:4,
          question: "Trẻ em có được phép bay một mình không?",
          content: (
            <div id="content4" className="bg-dript">
                            <div class="dript">
                                <h4>Trẻ em được phép bay một mình </h4>
                                <p> - Các hãng hàng không quy định mỗi trẻ em khi thực hiện chuyến bay phải 
                                    có ít nhất 1 người lớn từ 18 tuổi đi cùng.</p>
                                <p>- Một số trường hợp đặc biệt cần cho trẻ em bay 1 mình, khách hàng cần phải 
                                    đăng ký dịch vụ đặc biệt này với Hãng bay để đảm bảo an toàn cho trẻ em.</p>   
                                 <p>- Các dịch vụ đặc biệt cho trẻ em bay 1 mình có những quy định về độ tuổi của trẻ
                                     em và yêu cầu cụ thể khác từ hãng hàng không.</p>   
                                  <p>- Bố mẹ hoặc người thân, người được ủy quyền cần đăng ký dịch vụ trẻ em bay 1 mình trước ít nhất 24 - 36 tiếng so 
                                    với giờ khởi hành tại các Phòng Vé chính hãng</p>      
                            </div>
                            <img src="image/dript4.png" alt=""/>
                        </div>
          )
        },
        
    ];
    // Hàm xử lý khi người dùng click vào một câu hỏi
  const handleInfoClick = (id) => {
    setSelectedContentId(id);
  };
    return(
        <div>
          
              {/* Hiển thị danh sách các câu hỏi */}
              <div className="container-information">
      {infors.map((info) => (
        <p
          key={info.id}
          id={`info${info.id}`}
          className="content-info"
          onClick={() => handleInfoClick(info.id)}
        >
          {info.question}
        </p>
      ))}
      </div>
      <div className="container-information">
      {infors1.map((info1) => (
        <p
          key={info1.id}
          id={`info${info1.id}`}
          className="content-info"
          onClick={() => handleInfoClick(info1.id)}
        >
          {info1.question}
        </p>
      ))}
      </div>
      <div className="container-information">
      {infors2.map((info2) => (
        <p
          key={info2.id}
          id={`info${info2.id}`}
          className="content-info"
          onClick={() => handleInfoClick(info2.id)}
        >
          {info2.question}
        </p>
      ))}
      </div>
      
  
             
            {/* Hiển thị nội dung tương ứng với câu hỏi được chọn */}
      {infors.map((info) =>
        selectedContentId === info.id ? (
          <div key={info.id}>{info.content}</div>
        ) : null
      )}
      {infors1.map((info1) =>
        selectedContentId === info1.id ? (
          <div key={info1.id}>{info1.content}</div>
        ) : null
      )}
      {infors2.map((info2) =>
        selectedContentId === info2.id ? (
          <div key={info2.id}>{info2.content}</div>
        ) : null
      )}
        </div>
    )
}
export default ContentInfor;