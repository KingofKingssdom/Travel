import {Routes, Route} from 'react-router-dom'
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import TourComon from './Tour/TourComon';
import AirLine from './Components/AirLine/AirLine';
 import Content from './Components/Hotel/Content';
 import HotelPQ from './Components/Hotel/HotelOrder/Hotel-pq';
 import HotelDL from './Components/Hotel/HotelOrder/HotelDL';
 import HotelQN from './Components/Hotel/HotelOrder/HotelQN';
 import HotelVT from './Components/Hotel/HotelOrder/HotelVT';
 import HotelNT from './Components/Hotel/HotelOrder/HotelNT';
 import HotelDN from './Components/Hotel/HotelOrder/HotelDN';
 import HotelPT from './Components/Hotel/HotelOrder/HotelPT';
 import HotelPY from './Components/Hotel/HotelOrder/HotelPY';
 import Romantic from './Components/Hotel/HotelDiscover/Romantic-Internation/Romantic';
 import Internation from './Components/Hotel/HotelDiscover/Romantic-Internation/Internation';
 import Level from './Components/Hotel/HotelDiscover/Romantic-Internation/Level';
 import Voucher from './Components/Hotel/HotelDiscover/Gift/Voucher';
 import TourDetailChauau from './Tour/TourDetail/TourDetailChauau';
 import TourDetailThaiLan from './Tour/TourDetail/TourDetailThaiLan';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/tourPage' element={<TourComon/>}/>
        <Route path='/airLinePage' element={<AirLine/>}/>
        <Route path='/Phu-Quoc' element={<HotelPQ/>}/>
        <Route path='/Da-Lat' element={<HotelDL/>}/>
        <Route path='/Quy-Nhon' element={<HotelQN/>}/>
        <Route path='/Vung-Tau' element={<HotelVT/>}/>
        <Route path='/Nha-Trang' element={<HotelNT/>}/>
        <Route path='/Da-Nang' element={<HotelDN/>}/>
        <Route path='/Phan-Thiet' element={<HotelPT/>}/>
        <Route path='/Phu-Yen' element={<HotelPY/>}/>
        <Route path='/Lang-Man' element={<Romantic/>}/>
        <Route path='/Quoc-Te' element={<Internation/>}/>
        <Route path='/Dang-Cap' element={<Level/>}/>
        <Route path='/Gift-Voucher' element={<Voucher/>}/>
        <Route path='/GiangNamHanh-ThuongHai-ToChau-OTran-HangChau' element={<TourDetailChauau/>}/>
        <Route path='/Bangkok-Pattaya-CongVienKhungLong' element={<TourDetailThaiLan/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
