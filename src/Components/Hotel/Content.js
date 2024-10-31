import { Link } from 'react-router-dom';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import './Hotel.css'
function Content(){
    return(
        <div>
            <Content1/>
      <div className='row row-container'>
      <div className="col-3">
        <Link to="/Lang-Man">
        <Content2
        image= "./image/LangMan.png"
        name="Lãng mạn"
        content="Lãng mạn - chỉ có 2 ta giữa đất trời -"
        hotel="10 khách sạn"
      />
        </Link>
      </div>
      <div className="col-3" >
        <Link to="/Quoc-Te" >
        <Content2
        image="image/QuocTe.png"
        name="Quốc tế"
        content="Khám phá thế giới trong sắc màu kì diệu -"
        hotel="10 khách sạn"
      />
        </Link>
      
      </div>
      <div className="col-3">
        <Link to="/Dang-Cap" >
        <Content2
        image="image/Resort.png"
        name="Đẳng cấp"
        content="Resort số 1 thế giới, nay đã trong tầm với -"
        hotel="10 khách sạn"
      />
        </Link>
      
      </div>
      <div className="col-3">
        <Link to="/Gift-Voucher">
        <Content2
        image = "image/Voucher.png"
        name="Gift Voucher"
        content="Lưu giữ khoảng khắc, trải nghiệm hành trình"
      />
        </Link>
      
      </div>
      </div>
      <Content3/>
    </div>
        
    )
    
}
export default Content;