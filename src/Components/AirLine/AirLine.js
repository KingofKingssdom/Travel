import { Carousel } from 'react-bootstrap';
import './AirLine.css'
import TicketFrame from './TicketFrame';
import AirLineChildren2 from './AirLineChildren2';
import ContentInfor from './info';


import React from "react";
function AirLine(){
    return(
        <div>
        <div class="backgroundAirLine">
            <img src={process.env.PUBLIC_URL + "image/backgroundAirline.png"} alt="background"/>
        </div>
        <div class="introduce container">
            <div >
                <h5>Hơn 1 triệu vé đã bán</h5>
                <p>Vé nội địa quốc tế, giá tốt nhất</p>
            </div>
            <div >
                <h5>93% thực khách cực kì hài lòng</h5>
                <p>Trải nghiệm dịch vụ đáng tin cậy</p>
            </div>
            <div>
                <h5>Luôn luôn sẵn sàng hỗ trợ</h5>
                <p>Phản hồi trong 15 phút qua điện thoại hoặc zalo</p>
            </div>
        </div>
        <div className="order-ticket">
                <div className="container">
                <h1>Vé máy bay nội địa ưu đãi nhất</h1>
                <p>Giá vé siêu tiết kiệm từ Vietnam Airlines, Bamboo Airways, Vietjet, Vietravel Airlines</p>
                <div className="container-order-ticket">
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="06 thg 10"
                    end="Huế"
                    dayEnd="08 thg 10"
                    image="/image/VietJetAir.png"
                    price="1.361.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="13 thg 11"
                    end="Nha Trang"
                    dayEnd="15 thg 11"
                    image="/image/VietJetAir.png"
                    price="1.506.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="16 thg 12"
                    end="Đà Lạt"
                    dayEnd="18 thg 12"
                    image="/image/VietravelAirlines.png"
                    price="1.557.200 VNĐ"
                    />
                    
                </div>
                <div className="container-order-ticket">
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="15 thg 10"
                    end="Quy Nhơn"
                    dayEnd="17 thg 10"
                    image="/image/VietnamAirlines.png"
                    price="1.369.600 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="27 thg 10"
                    end="Đồng Hới"
                    dayEnd="29 thg 10"
                    image="/image/VietJetAir.png"
                    price="1.773.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="25 thg 10"
                    end="Hà Nội"
                    dayEnd="27 thg 10"
                    image="/image/VietnamAirlines.png"
                    price="1.361.200 VNĐ"
                    />
                    
                </div>
                <div className="container-order-ticket">
                    <TicketFrame
                    start="Cần Thơ"
                    dayStart="03 thg 11"
                    end="Đà Nẵng"
                    dayEnd="05 thg 11"
                    image="/image/VietravelAirlines.png"
                    price="2.009.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="27 thg 10"
                    end="Phú Quốc"
                    dayEnd="30 thg 10"
                    image="/image/VietnamAirlines.png"
                    price="2.030.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="01 thg 12"
                    end="Đà Nẵng"
                    dayEnd="03 thg 12"
                    image="/image/VietnamAirlines.png"
                    price="2.177.600 VNĐ"
                    />
                    
                </div>
                <div className="container-order-ticket">
                    <TicketFrame
                    start="Đà Nẵng"
                    dayStart="06 thg 10"
                    end="Hải Phòng"
                    dayEnd="08 thg 10"
                    image="/image/VietJetAir.png"
                    price="2.244.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="06 thg 10"
                    end="Đà Nẵng"
                    dayEnd="08 thg 10"
                    image="/image/VietJetAir.png"
                    price="2.361.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="13 thg 01"
                    end="Nha Trang"
                    dayEnd="15 thg 01"
                    image="/image/VietravelAirlines.png"
                    price="2.236.200 VNĐ"
                    />
                    
                </div>
                <div>
                    <h1>Khuyến mãi và ưu đãi</h1>
                    <p>Tận hưởng ưu đãi - Trải nghiệm thoải mái</p>
                    <Carousel interval={5000} controls={true} indicators={true}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="image/bannerAirLine1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="image/bannerAirLine2.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="image/bannerAirLine3.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                    <h1>Giá vé Quốc tế tốt nhất</h1>
                    <p>Giá vé cạnh tranh từ các hãng bay quốc tế uy tính như Vietnam Airlines, Singapore Airlines và EVA Air</p>
                    <h3>ĐÔNG NAM Á</h3>
                    <div className="container-order-ticket">
                    <TicketFrame
                    start="Đà Nẵng"
                    dayStart="10 thg 10"
                    end="Kuala Lumpur"
                    dayEnd="12 thg 10"
                    image="image/malindoAir.png"
                    price="2.944.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="13 thg 01"
                    end="Kuala Lumpur"
                    dayEnd="15 thg 01"
                    image="image/VietravelAirlines.png"
                    price="3.000.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="06 thg 10"
                    end="Bankkok"
                    dayEnd="08 thg 10"
                    image="image/VietJetAir.png"
                    price="3.004.000 VNĐ"
                    />
                    
                    </div>
                    <div className="container-order-ticket">
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="06 thg 10"
                    end="Bankkok"
                    dayEnd="08 thg 10"
                    image="image/VietravelAirlines.png"
                    price="2.244.200 VNĐ"
                    />
                    <TicketFrame
                    start="Hà Nội"
                    dayStart="13 thg 01"
                    end="Singapore"
                    dayEnd="15 thg 01"
                    image="image/VietJetAir.png"
                    price="3.475.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="06 thg 10"
                    end="Singapore"
                    dayEnd="08 thg 10"
                    image="image/malindoAir.png"
                    price="3.461.200 VNĐ"
                    />
                    
                    </div>
                    <h3>ĐÔNG BẮC Á VÀ TRUNG Á</h3>
                    <div className="container-order-ticket">
                    <TicketFrame
                    start="Đà Nẵng"
                    dayStart="15 thg 10"
                    end="Seoul"
                    dayEnd="20 thg 10"
                    image="image/VietJetAir.png"
                    price="3.719.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="17 thg 10"
                    end="Seoul"
                    dayEnd="20 thg 10"
                    image="image/VietJetAir.png"
                    price="3.879.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="06 thg 10"
                    end="Đài Bắc"
                    dayEnd="11 thg 10"
                    image="image/VietJetAir.png"
                    price="4.461.200 VNĐ"
                    />
                    
                    </div>
                    <div className="container-order-ticket">
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="04 thg 11"
                    end="Bắc Kinh"
                    dayEnd="08 thg 11"
                    image="image/malindoAir.png"
                    price="4.522.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="23 thg 10"
                    end="Qingdao"
                    dayEnd="27 thg 10"
                    image="image/VietJetAir.png"
                    price="4.475.000 VNĐ"
                    />
                    <TicketFrame
                    start="Hồ Chí Minh"
                    dayStart="16 thg 10"
                    end="Hàng Châu"
                    dayEnd="20 thg 10"
                    image="image/malindoAir.png"
                    price="3.461.200 VNĐ"
                    />
                    
                    </div>
                </div>
                <div>
                <h1>Kế hoạch riêng biệt, giá đặc biệt</h1>
                <p>Tiết kiệm chi phí - Theo đuổi ước mơ</p>
                <div className='container-contentNg'>
                <div className='contentNg'>
                <AirLineChildren2 
                    image="image/cover1.png"
                    title="Du học"
                    content="Đặt vé máy bay du học giá đặc biệt, không bỏ lỡ ưu đãi riêng cho du học sinh"
                />
                </div>
                <div className='contentNg'>

                <AirLineChildren2 
                    image="image/cover2.png"
                    title="Định cư"
                    content="Săn vé giá rẻ cho người định cư. Liên hệ với chúng tôi ngay hôm nay!"
                />
                </div>
                <div className='contentNg'>
                <AirLineChildren2 
                    image="image/cover3.png"
                    title="Làm việc"
                    content="Giá vé đặc biệt cho cô dâu định cư và người suất khẩu lao động"
                />
                </div>
                <div className='contentNg'>
                <AirLineChildren2 
                    image="image/cover4.png"
                    title="Săn vé"
                    content="Vé máy bay giá rẻ du lịch và thăm thân nhân ở Mỹ, Canada. Chat để tư vấn miễn phí"
                />
                </div>
                
                </div>
                
                </div>
                <div>
                <div>
                <h1>Thông tin hữu ích khi đi máy bay</h1>
                <p>Có một hành trình hơn cả mong đợi</p>
                </div>
                    <div className=''>
                    <ContentInfor/>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
export default AirLine;