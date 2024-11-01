import React from "react";
import './HotelDetail.css';
import BookHotelFrame from "./BookHotelFrame";

function PYHotel(){
    return(
        <div className="container">
          <h1>Khách sạn Phan Thiết</h1>
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
                image="image/pill-item-py1.png"
                name="Zannier Hotels Bãi San Hô"
                score="9.3"
                text="Tuyệt vời"
                count= "678 đánh giá"
                tag1="Châu Âu"
                tag2="Hiện đại"
                tag3="Phù hợp cho hội họp"
                item1= "Biệt lập trên vịnh Ninh Vân"
                item2="View thân thiện"
                price="2.351.000 VNĐ"
               />

                <BookHotelFrame
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng "
                image="image/pill-item-py2.png"
                name="Khu nghỉ dưỡng Stelia Beach Phú Yên"
                score="9.6"
                text="Tuyệt vời"
                count= "267 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Thương hiệu quốc tế "
                tag3="Hiện đại"
                item1= "Bãi biển riêng"
                item2="Villa gia đình riêng cao cấp"
                price="1.251.000 VNĐ"
               />

                <BookHotelFrame
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-py3.png"
                name="Rosa Alba Resort & Villas Tuy Hòa"
                score="9.0"
                text="Tuyệt vời"
                count= "496 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Chụp ảnh đẹp"
                item1= "Hồ bơi ngoài trời"
                item2="Villa riêng cao cấp"
                price="1.351.000 VNĐ"
               />

              <BookHotelFrame
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-py4.png"
                name="Khách sạn SALA Grand Tuy Hòa"
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

              <BookHotelFrame
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-py5.png"
                name="Khách sạn Sala Tuy Hòa Phú Yên"
                score="9.7"
                text="Tuyệt vời"
                count= "346 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Hiện đại"
                tag3="Chụp ảnh đẹp"
                item1= "Bãi biển riêng"
                item2="Tất cả các phòng hướng biển"
                price="2.158.000 VNĐ"
               />

              <BookHotelFrame
                title = "Còn 84 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-py6.png"
                name="Khách sạn Wink Tuy Hòa Beach"
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
                price="2.500.000 VNĐ"
               />

            <BookHotelFrame
                title = "Còn 90 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-py7.png"
                name="Mandala Hotel & Spa Phú Yên"
                score="9.1"
                text="Tuyệt vời"
                count= "100 đánh giá"
                tag1="Gần gũi với thiên nhiên"
                tag2="Châu Âu"
                tag3="Nghỉ dưỡng biển"
                tag4="Chụp ảnh đẹp"
                tag5="Thương hiệu quốc tế"
                item1= "Trong tổ hợp Grand World"
                item2="Dễ dàng khám phá"
                price="3.500.000 VNĐ"
               />
            </div>
          </div>
        </div>
    )
}
export default PYHotel;