import React from "react";
import "./HotelCommon.css"
import HotelCommonChildren from "./HotelCommonChildren";
function Romantic(){
    return(
        <div>
            <div className="backgroundAirLine">
            <img src="image/background-romanticHotel.jpg" alt=""/>
        </div>
        <div className="title">
            <p>Bạn đang tìm kiếm trải nghiệm du lịch nào?</p>
            <h1>Lãng mạn</h1>
            <div className="title-content">
                <p>Mùa thu là mùa của sự ấm áp và lãng mạn. Đi khắp thế gian, 
                    yêu thương ngập tràn trong những kỳ nghỉ nhẹ nhàng, yên tĩnh và 
                    riêng tư, được chăm sóc chu đáo hơn nhờ ít khách du lịch.</p>
            </div>
        </div>
        <div className="container bg bg-light">
            <div className="card-container">
                <HotelCommonChildren
                image="image/card-romanticHotel.png"
                title="Khu nghỉ dưỡng Six Senses Côn Đảo"
                score="9.5"
                text="Tuyệt vời"
                content="Tận hưởng không gian riêng tư với biệt thự 2 tầng 
                        có hồ bơi và tầm nhìn hướng biển, tặng bữa ăn trưa 
                        và tối mỗi ngày "
                price="20.499.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/NhaTrang-romanticHotel.png"
                title="Khu nghỉ dưỡng Six Senses Ninh Vân Bay Nha Trang"
                score="9.8"
                text="Tuyệt vời"
                content="Nghỉ dưỡng với phòng Hilltop riêng tư, tầm nhìn
                        ôm trọn vịnh, cùng nhau nhâm nhi cocktails bên bờ 
                        biển ngắm ánh mặt trời tắt dần"
                price="10.099.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/NinhThuan-romanticHotel.png"
                title="Khu nghỉ dưỡng Amanoi Ninh Thuận"
                score="9.9"
                text="Tuyệt vời"
                content="Cùng chinh phục những cung đương trekking tuyệt vời,
                                tận hưởng liệu trình spa cặp đôi với ưu đãi Chi trả 
                                bằng credit được tặng bởi Amanoi"
                price="20.499.000 VNĐ"
                />
            </div>
            <div className="card-container">
                <HotelCommonChildren
                image="image/MaiChau-romanticHotel.png"
                title="Khu nghỉ dưỡng Avana Retreat Mai Châu"
                score="9.9"
                text="Tuyệt vời"
                content="Cùng tận hưởng khoảng khắc bình yên, tiếng thác nước 
                        róc rách, sương sớm phủ rộng bậc thang & tình yêu thăng hoa
                        iữa thiên nhiên hùng vĩ"
                price="3.199.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/DaNang-romanticHotel.png"
                title="Khu nghỉ dưỡng TIA Wellnes Đà Nẵng"
                score="9.9"
                text="Tuyệt vời"
                content="Tận hưởng không gian villa riêng tư cùng khuôn viên 
                        vườn xanh mát, thư giãn cùng  với những liệu trình Spa hoàn hảo"
                price="10.399.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/NinhVan-romanticHotel.png"
                title="An Lâm Retreats Ninh Vân Bay"
                score="9.8"
                text="Tuyệt vời"
                content="Cùng thưởng thức giữa thiên nhiên, nơi rừng và biển 
                        giao hòa, rồi nhâm nhi ly cocktails khi hoàng hôn buông.
                        Cảm nhận từng khoảng khắc lãng mạn"
                price="5.499.000 VNĐ"
                />
            </div>
            <div className="card-container">
                <HotelCommonChildren
                image="image/PhanThiet-romanticHotel.png"
                title="Khu nghỉ dưỡng Azerai Kê Gà Bay Phan Thiết"
                score="9.8"
                text="Tuyệt vời"
                content="Lựa chọn hoàn hảo cho các cặp đôi tìm kiếm một 
                        kì nghỉ nồng cháy, tận hương từng phút giây trong hồ
                        của hạng phòng Pool Villa"
                price="1.799.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/QuyNhon-romanticHotel.png"
                title="Khu nghỉ dưỡng Maia Quy Nhơn"
                score="9.8"
                text="Tuyệt vời"
                content="Nơi biển xanh, cát trắng và vườn nhiệt đới hoa 
                        quyện, tạo không gian yên bình, lãng mạn, hoàn hảo 
                        cho các cặp đôi tận hưởng riêng tư"
                price="4.499.000 VNĐ"
                />
                <HotelCommonChildren
                image="image/QuangHanh-romanticHotel.png"
                title="Khu nghỉ dưỡng Yoko Osen Quang Hành"
                score="9.8"
                text="Tuyệt vời"
                content="Tắm khoáng trong không gian lãng mạn, riêng thư
                        là điểm lý tưởng cho các cặp đôi tái tạo sức khỏe 
                        và kết nối yêu thương"
                price="1.599.000 VNĐ"
                />
            </div>
            </div>
        </div>
    )
}
export default Romantic;