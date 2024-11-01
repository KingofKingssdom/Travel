import React from "react";
import './HotelDetail.css';
import BookHotelFrame from "./BookHotelFrame";

function PQHotel(){
    return(
        <div className="container">
          <h1>Khách sạn Phú Quốc</h1>
          <div className="row">
          <div class="col-xs-12 col-md 3 sidebar-left">
                <div class="cs">
                    <div class="img-wrapper">
                        <img src="image/img-the.png" alt="Reception"/>
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
               <BookHotelFrame
                title = "Còn 80 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item1.png"
                name="Khu nghỉ dưỡng Melia Vinpearl Phú Quốc"
                score="9.3"
                text="Tuyệt vời"
                count= "678 đánh giá"
                tag1="Châu Âu"
                tag2="Thương hiệu quốc tế "
                tag3="Hiện đại"
                tag4="Nghỉ dưỡng trên biển"
                tag5="Phù hợp cho hội họp"
                item1= "Villa biển cao cấp"
                item2="Gia đình - Nhóm bạn"
                price="351.000 VNĐ"
               />

               <BookHotelFrame
                title = " Còn 64 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item2.png"
                name="Nghỉ dưỡng Premier Residences Phú Quốc"
                score="9.3"
                text="Tuyệt vời"
                count= "678 đánh giá"
                tag1="Châu Âu"
                tag2="Thương hiệu quốc tế "
                tag3="Hiện đại"
                item1= "Hồ bơi vô cực"
                item2="Hồ bơi riêng trên căn hộ"
                price="1.251.000 VNĐ"
               />

                <BookHotelFrame
                title = "Còn 80 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item3.png"
                name="Sheraton Phú Quốc Long Beach Resort"
                score="9.5"
                text="Tuyệt vời"
                count= "578 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Nghỉ dưỡng biển"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Bãi biển riêng"
                item2="Bể bơi giáp biển duy nhất"
                price="351.000 VNĐ"
               />

              <BookHotelFrame
                title = "Còn 70 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item4.png"
                name="JW Marriott Phú Quốc Emerald Bay"
                score="9.8"
                text="Tuyệt vời"
                count= "246 đánh giá"
                tag1="Chụp ảnh đẹp"
                tag2="Châu Âu"
                tag3="Thương hiệu quốc tế"
                item1= "Thiết kế độc đáo"
                item2="Bãi biển riêng cát trắng"
                price="450.000 VNĐ"
               />

              <BookHotelFrame
                title = "Còn 74 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item5.png"
                name="Khu nghỉ dưỡng Wyndham Grand Phú Quốc"
                score="9.7"
                text="Tuyệt vời"
                count= "278 đánh giá"
                tag1="Nghỉ dưỡng biển"
                tag2="Hiện đại"
                tag3="Nghỉ dưỡng biển"
                item1= "Thiết kế độc đáo"
                item2="Bãi biển riêng cát trắng"
                price="158.000 VNĐ"
               />

              <BookHotelFrame
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

              <BookHotelFrame
                title = "Còn 54 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item7.png"
                name="Vinpearl Wonderworld Phú Quốc"
                score="9.7"
                text="Tuyệt vời"
                count= "108 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Nghỉ dưỡng biển"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Trong tổ hợp Grand World"
                item2="Dễ dàng khám phá"
                price="500.000 VNĐ"
               />

              <BookHotelFrame
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item8.png"
                name="Seashells Phú Quốc Hotel & Spa"
                score="9.7"
                text="Tuyệt vời"
                count= "341 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Nghỉ dưỡng biển"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Bãi biển riêng"
                item2="Hồ bơi vô cực"
                price="5.500.000 VNĐ"
               />
            </div>
          </div>
        </div>
    )
}
export default PQHotel;
