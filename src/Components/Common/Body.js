import {Routes, Route} from 'react-router-dom'

 import PQHotel from './Components/Hotel/BookHotel/PQHotel';
 import DLHotel from './Components/Hotel/BookHotel/DLHotel';
 import QNHotel from './Components/Hotel/BookHotel/QNHotel';
 import VTHotel from './Components/Hotel/BookHotel/VTHotel';
 import NTHotel from './Components/Hotel/BookHotel/NTHotel';
 import DNHotel from './Components/Hotel/BookHotel/DNHotel';
 import PTHotel from './Components/Hotel/BookHotel/PTHotel';
 import PYHotel from './Components/Hotel/BookHotel/PYHotel';
 import Romantic from './Components/Hotel/HotelDiscover/Romantic-Internation/Romantic';
 import Internation from './Components/Hotel/HotelDiscover/Romantic-Internation/Internation';
 import Level from './Components/Hotel/HotelDiscover/Romantic-Internation/Level';
 import Voucher from './Components/Hotel/HotelDiscover/Gift/Voucher';
 import TourDetailChauau from './Components/Tour/TourDetail/TourDetailChauau';
 import TourDetailThaiLan from './Components/Tour/TourDetail/TourDetailThaiLan';

function Body(){
    return(
        <div>
            {/* <Routes>
         
        <Route path='/Phu-Quoc' element={<PQHotel/>}/>
        <Route path='/Da-Lat' element={<DLHotel/>}/>
        <Route path='/Quy-Nhon' element={<QNHotel/>}/>
        <Route path='/Vung-Tau' element={<VTHotel/>}/>
        <Route path='/Nha-Trang' element={<NTHotel/>}/>
        <Route path='/Da-Nang' element={<DNHotel/>}/>
        <Route path='/Phan-Thiet' element={<PTHotel/>}/>
        <Route path='/Phu-Yen' element={<PYHotel/>}/>
        <Route path='/Lang-Man' element={<Romantic/>}/>
        <Route path='/Quoc-Te' element={<Internation/>}/>
        <Route path='/Dang-Cap' element={<Level/>}/>
        <Route path='/Gift-Voucher' element={<Voucher/>}/>
        <Route path='/GiangNamHanh-ThuongHai-ToChau-OTran-HangChau' element={<TourDetailChauau/>}/>
        <Route path='/Bangkok-Pattaya-CongVienKhungLong' element={<TourDetailThaiLan/>}/>
      </Routes> */}
        </div>
    )
}
export default Body;