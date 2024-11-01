import {Link} from 'react-router-dom'
function HotelPageContent3(){
    return(
        <div className="container">
            <div>
                <h1>Điểm đến yêu thích trong nước</h1>
                <p>Lên rừng xuống biển. Trọn vẹn Việt Nam</p>
              </div>
              <div>
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-8 pq">
                        <Link to="/Phu-Quoc" target='_blank'className='card-item'>
                          <img src="image/PhuQuoc-hotel.png" alt="PhuQuocHotel"/>
                          <h3>Phú quốc</h3>                        
                        </Link>                       
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 dl">
                        <Link to="/Da-Lat" target='_blank'className='card-item'>
                          <img src="image/DL.png" alt="DaLatHotel"/>
                          <h3>Đà lạt</h3>                     
                        </Link>                       
                      </div>
                      <div className="col-4 qn">
                        <Link to="/Quy-Nhon" target='_blank' className='card-item'>
                          <img src="image/Qn.png" alt="QuangNgaiHotel"/>
                          <h3>Quy Nhơn</h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 vt">
                    <Link to="/Vung-Tau" target="_blank" className='card-item'>
                      <img src="image/vt.png" alt="VungTauHotel"/>
                      <h3>Vũng Tàu</h3>   
                    </Link> 
                  </div>
                </div>
                <div className="row"> 
                    <div className="col-4 nt">
                      <Link to="/Nha-Trang" target="_blank" className='card-item'>
                      <img src="image/nt.png" alt="NhaTrangHotel"/>
                      <h3>Nha Trang</h3>
                      </Link>
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-8 dn">
                          <Link to="/Da-Nang" target="_blank" className='card-item'>
                            <img src="image/DaNang-Hotel.png" alt="DaNangHotel"/>
                            <h3>Đà Nẵng</h3>   
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 pt">
                          <Link to="/Phan-Thiet" target='_blank' className='card-item' >
                          <img src="image/pt.png" alt="PhanThietHotel"/>
                          <h3>Phan Thiết</h3>
                          </Link>
                        </div>
                        <div className="col-4 py">
                          <Link to="/Phu-Yen" target='_blank' className='card-item'>
                            <img src="image/py.png" alt="PhuYenHotel"/>
                            <h3>Phú Yên</h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
        </div>
    )
}
export default HotelPageContent3;