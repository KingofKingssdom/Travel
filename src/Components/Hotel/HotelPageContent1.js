import React from "react";
import { Carousel } from 'react-bootstrap';
function HotelPageContent1() {
  return (
    <div>
      <img src="/image/backgroundHotel.png" alt="background" />
      <div className='container'>
        <h1>Combo tốt nhất hôm nay</h1>
        <span className="badge ti"> 318 khách đã đặt phòng trong 24h qua </span>
        <p>Nhanh tay đặt ngay. Để mai sẽ lỡ</p>
        
        <Carousel interval={5000} controls={true} indicators={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/clourse1.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/clourse2.webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/clourse3.webp"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/clourse4.webp"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1>Mùa thu đẹp nhất để vi vu!</h1>
        <p>Giá hời, dịch vụ tận tâm – Trải nghiệm nhẹ nhàng hơn bao giờ hết.</p>
      </div>
    </div>
  );
}

export default HotelPageContent1;