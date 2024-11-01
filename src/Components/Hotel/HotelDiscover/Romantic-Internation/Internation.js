import React from "react";
import "./HotelCommon.css"
import HotelCommonChildren from "./HotelCommonChildren";
function Internation(){
    return(
        <div>
            <div className="backgroundAirLine">
            <img src="image/background-internationalHotel.jpg" alt="background"/>
        </div>
        <div className="title">
            <p>Bạn đang tìm kiếm trải nghiệm du lịch nào?</p>
            <h1>Quốc tế</h1>
            <div className="title-content">
                <p>Mùa thu mang đến những cảnh quan tuyệt đẹp tại khắp các điểm đến quốc tế, 
                    nơi bạn có thể trải nghiệm thiên nhiên đổi màu và không gian thanh bình, 
                    khác biệt so với bất kỳ thời điểm nào trong năm.</p>
            </div>
        </div>
        <div className="container bg bg-light">
            <div className="card-container">
                <HotelCommonChildren
                image="image/Berlin-internationalHotel.png"
                title=" Khách sạn Adlon Kempinski Berlin"
                score="9.5"
                text="Tuyệt vời"
                content="Trải nghiệm sự xa hoa vượt thời gian 
                        tại khách sạn Adlon Kempinski Berlin, 
                        ngay cạnh Cổng Brandenburg lịch sử."
                price="20.699.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/Bhutan-internationalHotel.png"
                title="Khu nghỉ dưỡng Six Senses Ninh Vân Bay Nha Trang"
                score="9.8"
                text="Tuyệt vời"
                content="Nằm trên thung lũng Paro, với tầm nhìn ngoạn mục ra cảnh 
                        quan núi non và thiên nhiên hùng vĩ, mang đến không gian thư 
                        giãn tuyệt vời."
                price="114.099.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/Duomo-internationalHotel.png"
                title=" Khách sạn The Glamore Milano Duomo"
                score="9.9"
                text="Tuyệt vời"
                content=" Khám phá sự xa hoa tinh tế tại kinh đô thời trang Milan, với vị trí đắc
                          địa chỉ cách Nhà thờ Duomo nổi tiếng vài bước chân."
                price="53.499.000 VNĐ"
                />
            </div>
            <div className="card-container">
                <HotelCommonChildren
                image="image/DuThuyenSing-internationalHotel.png"
                title="Siêu du thuyền Genting Dream Singapore"
                score="9.9"
                text="Tuyệt vời"
                content="Trọn gói hải trình 3 ngày du ngoạn Singapore - Malaysia - Singapore 
                        và vui chơi sảng khoái trên du thuyền."
                price="7.199.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/DuThuyen-internationalHotel.png"
                title=" Siêu du thuyền Spectrum of the Seas Shanghai"
                score="9.9"
                text="Tuyệt vời"
                content="Phiêu lưu trên đại dương với siêu du thuyền đẳng cấp, 
                        đưa bạn vào hành trình khám phá vùng biển lộng gió với 
                        các điểm dừng chân tại Nam Á."
                price="17.399.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/Ski-internationalHotel.png"
                title=" Palcall Tsumagoi Resort Hotel"
                score="9.8"
                text="Tuyệt vời"
                content="Điểm đến không thể bỏ qua cho mùa trượt tuyết, 
                        tận hưởng không khí thanh bình của dãy núi Nhật Bản 
                        và không gian nghỉ dưỡng yên bình."
                price="9.499.000 VNĐ"
                />
            </div>
            </div>
        </div>
    )
}
export default Internation;