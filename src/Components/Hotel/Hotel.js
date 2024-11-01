import { Link } from 'react-router-dom';
import HotelPageContent1 from './HotelPageContent1';
import HotelPageContent2 from './HotelPageContent2';
import HotelPageContent3 from './HotelPageContent3';
import './Hotel.css'
function Hotel(){
    return(
        <div>
            <HotelPageContent1/>
      <div className='row row-container'>
      <div className="col-3">
        <Link to="/Lang-Man">
        <HotelPageContent2
        image= "./image/LangMan.png"
        name="Lãng mạn"
        content="Lãng mạn - chỉ có 2 ta giữa đất trời -"
        hotel="10 khách sạn"
      />
        </Link>
      </div>
      <div className="col-3" >
        <Link to="/Quoc-Te" >
        <HotelPageContent2
        image="image/QuocTe.png"
        name="Quốc tế"
        content="Khám phá thế giới trong sắc màu kì diệu -"
        hotel="10 khách sạn"
      />
        </Link>
      
      </div>
      <div className="col-3">
        <Link to="/Dang-Cap" >
        <HotelPageContent2
        image="image/Resort.png"
        name="Đẳng cấp"
        content="Resort số 1 thế giới, nay đã trong tầm với -"
        hotel="10 khách sạn"
      />
        </Link>
      
      </div>
      <div className="col-3">
        <Link to="/Gift-Voucher">
        <HotelPageContent2
        image = "image/Voucher.png"
        name="Gift Voucher"
        content="Lưu giữ khoảng khắc, trải nghiệm hành trình"
      />
        </Link>
      
      </div>
      </div>
      <HotelPageContent3/>
    </div>
        
    )
    
}
export default Hotel;