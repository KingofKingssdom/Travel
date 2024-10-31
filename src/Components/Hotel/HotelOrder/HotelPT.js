import React from "react";
import './HotelDetail.css';
import HotelChildren from "./HotelChildren";

function HotelPT(){
    return(
        <div className="container">
          <h1>Khách sạn Phan Thiết</h1>
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
                title = "Còn 80 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-pt1.png"
                name="Khu nghỉ dưỡng Centara Mirage Mũi Né"
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

                <HotelChildren
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng "
                image="image/pill-item-pt2.png"
                name="Khu nghỉ dưỡng Movenpick Phan Thiết"
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

                <HotelChildren
                title = "Còn 24 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-pt3.png"
                name="Khu nghỉ dưỡng The Anam Mũi Né"
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

              <HotelChildren
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-pt4.png"
                name="Khu nghỉ dưỡng Asteria Mũi Né"
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
                title = "Còn 45 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-pt5.png"
                name="Khu nghỉ dưỡng Asteria Mũi Né"
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

              <HotelChildren
                title = "Còn 84 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng + Villa bể bơi"
                image="image/pill-item-pt6.png"
                name="Khu nghỉ dưỡng Anantara Mũi Né "
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

            <HotelChildren
                title = "Còn 90 ngày | Combo 3N2Đ | Vé máy bay + Đưa đón + Buffet sáng"
                image="image/pill-item-pt7.png"
                name="Khu nghỉ dưỡng Anantara Mũi Né"
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
export default HotelPT;
