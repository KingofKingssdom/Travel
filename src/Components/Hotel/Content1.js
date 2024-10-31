function Content1(){
    return(
        <div >
          <img src="image/backgroundHotel.png" alt="" />
        <div className='container'> 
         <h1>Combo tốt nhất hôm nay</h1>
        <span className="badge ti"> 318 khách đã đặt phòng trong 24h qua </span>
         <p>Nhanh tay đặt ngay. Để mai sẽ lỡ</p>
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      >
        1
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      >
        2
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      >
        3
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      >
        4
      </button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="image/clourse1.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="image/clourse2.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="image/clourse3.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="image/clourse4.webp" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <h1>Mùa thu đẹp nhất để vi vu!</h1>
  <p>Giá hời, dịch vụ tận tâm – Trải nghiệm nhẹ nhàng hơn bao giờ hết.</p>
        </div>
      </div> 
    )
}
export default Content1;