import React from "react";
import './HotelDetail.css';
import HotelChildren from "./HotelChildren";

function HotelDL(){
    return(
        <div className="container">
          <h1>Khách sạn Đà Lạt</h1>
          <div className="row">
          <div class="col-xs-12 col-md 3 sidebar-left">
                <div class="cs">
                    <div class="img-wrapper">
                        <img src="image/img-the.png" alt=""/>
                    </div>
                    <div>
                        <h5>Cần hỗ trợ ?</h5>
                        <div class="content-wrapper">
                            <div>
                                <p>HCM</p>
                                <p>HN</p>
                                <p>ĐN</p>
                            </div>
                            <div class="cn">
                                <p>1900 1870</p>
                                <p>1900 2045</p>
                                <p>1900 2087</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-9">
               <HotelChildren
                title = " Còn 80 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl1.png"
                name="Hotel Colline Đà Lạt"
                score="9.3"
                text="Tuyệt vời"
                count= "678 đánh giá"
                tag1="Châu Âu"
                tag2="Hiện đại"
                tag3="Phù hợp cho hội họp"
                item1= "Khách sạn mới"
                item2="Gần chợ Đà Lạt"
                price="4.351.000 VNĐ"
               />

                <HotelChildren
                title = "Còn 64 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl2.png"
                name="Khu nghỉ dưỡng Ana Mandara Villas"
                score="9.3"
                text="Tuyệt vời"
                count= "267 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Thương hiệu quốc tế "
                tag3="Hiện đại"
                item1= "Biệt thự cổ"
                item2="Đông Dương"
                price="1.251.000 VNĐ"
               />

                <HotelChildren
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl3.png"
                name="Khu nghỉ dưỡng Đà Lạt Wonder"
                score="9.0"
                text="Tuyệt vời"
                count= "496 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Chụp ảnh đẹp"
                item1= "Biệt thự nghỉ dưỡng"
                item2="Cảnh đẹp xung quanh"
                price="1.351.000 VNĐ"
               />

              <HotelChildren
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl4.png"
                name="Khu nghỉ dưỡng Mercure Đà Lạt"
                score="9.8"
                text="Tuyệt vời"
                count= "246 đánh giá"
                tag1="Chụp ảnh đẹp"
                tag2="Châu Âu"
                tag3="Thương hiệu quốc tế"
                item1= "Thiết kế độc đáo"
                item2="Biệt thự nghỉ dưỡng"
                price="2.450.000 VNĐ"
               />

              <HotelChildren
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl5.png"
                name="Khách sạn Golden Imperial Đà Lạt "
                score="9.7"
                text="Tuyệt vời"
                count= "346 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Hiện đại"
                tag3="Chụp ảnh đẹp"
                item1= "Gần Quảng trường Đà Lạt"
                item2="Trung tâm Thành phố"
                price="2.158.000 VNĐ"
               />

              <HotelChildren
                title = "Còn 74 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item6.png"
                name="Khách sạn VinHolidays Fiesta Phú Quốc"
                score="9.1"
                text="Tuyệt vời"
                count= "508 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Nghỉ dưỡng biển"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Trong tổ hợp Grand World"
                item2="Dễ dàng khám phá"
                price="500.000 VNĐ"
               />

              <HotelChildren
                title = "Còn 90 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl6.png"
                name="Khách sạn The Western Hill Đà Lạt"
                score="9.7"
                text="Tuyệt vời"
                count= "108 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Đầy đủ tiện nghi"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Vị trí thuận tiện"
                item2="Bốn mặt nhìn ra thiên nhiên"
                price="2.500.000 VNĐ"
               />

              <HotelChildren
                title = "Còn 54 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-dl7.png"
                name="Khách sạn Sandals LiLy Đà Lạt"
                score="9.7"
                text="Tuyệt vời"
                count= "341 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Tiện nghi"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Khách Sạn mới"
                item2="Gần chợ Đà Lạt"
                price="2.500.000 VNĐ"
               />
            </div>
          </div>
        </div>
    )
}
export default HotelDL;
