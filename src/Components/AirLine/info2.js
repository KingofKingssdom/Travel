import React from "react"
import { useState } from "react"
function ContentInfor2(){
    const [selectedContentId, setSelectedContentId] = useState (null);

    const infors = [
        {
            
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
        }
    ];
    // Hàm xử lý khi người dùng click vào một câu hỏi
  const handleInfoClick = (id) => {
    setSelectedContentId(id);
  };
    return(
        <div>
            <div className="">
                {/* Hiển thị danh sách các câu hỏi */}
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
             
            {/* Hiển thị nội dung tương ứng với câu hỏi được chọn */}
      {infors.map((info) =>
        selectedContentId === info.id ? (
          <div key={info.id}>{info.content}</div>
        ) : null
      )}
        </div>
    )
}
export default ContentInfor2;