import React from "react";
import "./HotelCommon.css"
import HotelCommonChildren from "./HotelCommonChildren";
function Level(){
    return(
        <div>
            <div className="backgroundAirLine">
            <img src="image/background-levelHotel.jpg" alt="bacground"/>
        </div>
        <div className="title">
            <p>Bạn đang tìm kiếm trải nghiệm du lịch nào?</p>
            <h1>Đẳng cấp</h1>
            <div className="title-content">
                <p>Những khu nghỉ dưỡng sang trọng nhất thế giới nay đã sẵn sàng đón tiếp bạn 
                    với mức giá ưu đãi đặc biệt trong mùa thu. Trải nghiệm dịch vụ thượng hạng,
                     riêng tư và tận tâm hơn trong mùa thấp điểm.</p>
            </div>
        </div>
        <div className="container bg bg-light">
            <div className="card-container">
                <HotelCommonChildren
                image="image/HaiNam-levelHotel (1).png"
                title="Khu nghỉ dưỡng Four Seasons The Nam Hải Hội An"
                score="9.5"
                text="Tuyệt vời"
                content="Khám phá sự lộng lẫy & những khoảnh khắc yên tĩnh trên bãi biển đẹp nhất Việt Nam"
                price="15.199.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/DaNang-levelHotel.png"
                title=" InterContinental Đà Nẵng Sun Peninsula Resort"
                score="9.8"
                text="Tuyệt vời"
                content="Tự hào được vinh danh là 3 Khu Nghỉ Dưỡng Tốt Nhất Châu Á
                                và 15 Khu Nghỉ Dưỡng Tốt nhất Thế Giới"
                price="11.099.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/PhuQuoc-levelHotel.png"
                title="Khu nghỉ dưỡng InterContinental Phu Quoc Long Beach"
                score="9.9"
                text="Tuyệt vời"
                content="Là khu nghỉ dưỡng thứ 1000 thuộc tập đoàn IHG - Biểu tượng của sự 
                                sang trọng và thanh nhã tại đảo ngọc Phú Quốc."
                price="6.499.000 VNĐ"
                />
            </div>
            <div className="card-container">
                <HotelCommonChildren
                image="image/QuyNhon-levlHotel.png"
                title="Khu nghỉ dưỡng Anantara Quy Nhơn Villas"
                score="9.9"
                text="Tuyệt vời"
                content="Lấy cảm hứng từ làng chài, khu nghỉ dưỡng này nổi bật với sự sang trọng 
                        và bể bơi vô cực hướng biển, tạo không gian độc đáo và riêng tư."
                price="12.199.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/Sapa-levelHotel.png"
                title="Hotel de la Coupole - MGallery Sapa"
                score="9.9"
                text="Tuyệt vời"
                content="Thiết kế tinh tế lấy cảm hứng từ thời trang Pháp, 
                        tạo nên không gian nghỉ dưỡng sang trọng và đầy mê hoặc."
                price="2.399.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/PhuQuoclegent-levelHotel.png"
                title="Khu nghỉ dưỡng Regent Phú Quốc"
                score="9.8"
                text="Tuyệt vời"
                content="Vinh dự được Michelin Guide giới thiệu trong danh sách khách 
                        sạn giữa thiên nhiên ấn tượng nhất châu Á."
                price="13.499.000 VNĐ"
                />
            </div>
            </div>
        </div>
    )
}
export default Level;