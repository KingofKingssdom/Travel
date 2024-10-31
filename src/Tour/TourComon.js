import React from 'react';
import { Link } from 'react-router-dom';
import './tour.css'
import TourChildren1 from './TourChildren/TourChildren1.js'
function TourComon(){
    return(
        <div>
            <img src="image/tourBackground.png" alt=""/>
            <div>
            <div className="introduction">
                <h6>1000+ tours</h6>
                <p>Chất lượng trong và ngoài nước</p>
            </div>
            <div className="introduction">
                <h6>10K+ đánh giá 5 sao</h6>
                <p>Từ những khách hàng đã đặt tour</p>
            </div>
            <div className="introduction">
                <h6>100+ ưu đãi mỗi ngày</h6>
                <p>Cho khách đặt sớm, theo nhóm, phút chót</p>
            </div> 
            </div>
            <div className="tour-today">
            <h1>Tour Ưu Đãi Tốt Nhất Hôm Nay</h1>
            <p>Nhanh tay đặt ngày để mai sẽ lỡ</p>
            <div className='cardContainer'>
                <Link  to="/GiangNamHanh-ThuongHai-ToChau-OTran-HangChau">
                <TourChildren1
                image="image/tourChauau.jpg"
                title="Tour Châu Âu 5N4Đ: TP.HCM - Khám phá - Pháp - Thụy Sĩ - Vantican"
                emotion="10.0"
                feeling="Tuyệt vời"
                evaluate="1 đánh giá "
                location1="Tòa Thánh Vatican"
                location2= "Tháp nghiêng Pisa"
                location3="Tháp Eiffel"
                location4="Du thuyền "
                price="61.950.000 VNĐ"
                />
                </Link>
                
                <Link to="/Bangkok-Pattaya-CongVienKhungLong">
                <TourChildren1
                image="image/tourThaiLan5N4D.jpg"
                title="Tour Thái Lan 5N4Đ: Bangkok - Pattaya - Công viên khủng long(Bay sáng, trưa)"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate=" 13 đánh giá"
                location1="Trần Bảo Phật Sơn"
                location2= "Đảo San Hô"
                location3="Vườn Nong Nooch"
                location4="Phật Bốn Mặt"
                price="5.990.000 VNĐ"
                />
                </Link>
                
                <Link to="/LeGiang-DaiLy-Sangrila">
                <TourChildren1
                image="image/tourTrungQuoc_LeGiang.jpg"
                title="Tour Trung Quốc 6N5Đ: Lệ Giang - Đại Lý - Sangrila (No Shopping)"
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá"
                location1="Thành Cổ Dukezon"
                location2= "Núi Tuyết Ngọc Long"
                location3="Khe Hố Nhảy"
                location4="Công viên Hắc Long Đàm"
                price="19.990.000 VNĐ"
                />
                </Link>
            
            </div>
            <div className='cardContainer'>
                <Link to="/NghiXuong-TruongGiaGioi-ThienMonSon-PhuongHoangCoTran">
                <TourChildren1
                image="image/tourTrungQuoc_NghiXuong.jpg"
                title="Tour Trung Quốc 6N5Đ: Nghi Xương - Trương Gia Giới - Thiên Môn Sơn - Phượng Hoàng Cổ Trấn"
                emotion="9.3"
                feeling="Tuyệt vời"
                evaluate="3 đánh giá "
                location1="Đập Tam Hiệp"
                location2= "Phượng Hoàng Cổ Trấn"
                location3="Show Tam Hiệp Thịnh Điển"
                location4="Thiên Môn Sơn"
                price="10.288.000 VNĐ"
                />
                </Link>
                <Link to="/HCM-CapNhiTan-LangTuyetHuong-MauDonGiang-HoJingbo">
                <TourChildren1
                image="image/tourTrungQuoc_CapNhiTan.jpg"
                title="Tour Trung Quốc 6N5Đ: HCM - Cáp Nhĩ Tân - Làng Tuyết Hương - Mẫu Đơn Giang - Hồ Jingbo"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate="13 đánh giá"
                location1="Ngủ Làng Tuyết Hương 1 đêm"
                location2= "Thế giới băng tuyết"
                location3="Hồ Jingbo"
                price="5.990.000 VNĐ"
                />
                </Link>
                <Link to="/HCM-GardensByTheBay-CaoNguyenGenting">
                <TourChildren1
                image="image/tourSingapore.jpg"
                title="Tour Singapore - Malaysia 5N4Đ: HCM - Gardens By The Bay - Cao Nguyên Genting - Động Batu - Chùa Thiền Hậu"
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá "
                location1="Động Batu"
                location2= "Chùa Thiền Mậu Thánh Mẫu"
                location3="Cao Nguyên Genting"
                location4="Làng Phổ Đà"
                price="8.990.000 VNĐ"
                />
                </Link>
            </div>
            <a href="" className="see-more-tours">Xem thêm các Tours</a>
            </div>
            <div className="tour-autumn">
            <h1>Chùm Tour Du Lịch Mùa Thu</h1>
            <p>Khám phá thể giới, thưởng ngoạn thu vàng</p>
            <div className='cardContainer'>
                <Link to="/HCM-Narita-Yamanashi">
                <TourChildren1
                image="image/tourNhatBan_Narita.jpg"
                title="Tour Nhật Bản 4N4Đ: HCM - Narita - Yamanashi - Tokyo mùa thu lá đỏ"
                emotion="10.0"
                feeling="Tuyệt vời"
                evaluate="4 đánh giá "
                location1="Vinh Odaiba"
                location2= "Nũi Phú Sĩ"
                location3="Làng Cổ Oshino Hakkai"
                location4="Công viên giải trí"
                price="24.880.000 VNĐ"
                />
                </Link>
                <Link to="/HCM-DaoNami-CongVienEverland">
                <TourChildren1
                image="image/tourHanQuoc_DaoNami.jpg"
                title="Tour Hàn Quốc 4N4Đ: HCM - Đảo Nami - Công viên Everland - Làng Bích Họa Songwol - Tháp Namsan"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate="7 đánh giá"
                location1="Khu giải trí Everland"
                location2= "Cảnh Phúc Cung"
                location3="Đảo Nami"
                location4="Làng Bích Họa Songwol"
                price="5.990.000 VNĐ"
                />
                </Link>
                <Link to="/HaNoi-Seoul-Nami">
                <TourChildren1
                image="image/tourHanQuoc_Seoul.jpg"
                title="Tour Hàn Quốc 5N4Đ: Hà Nội - Seoul - Nami - Làng Korean Folk - Thư viện Starfield"
                emotion="8.3"
                feeling="Tuyệt vời"
                evaluate="3 đánh giá"
                location1="Đảo Nami"
                location2= "Tháp Nam San"
                location3="Hồ Seokchon"
                location4="Làng dân tộc Korean Folk"
                price="17.940.000 VNĐ"
                />
                </Link>
            </div>
            <div className='cardContainer'>
                <Link to="/CungDuongVangOsaka-Kyoto">
                <TourChildren1
                image="image/tourNhatBan_CungDuongVang.jpg"
                title="Tour Nhật Bản 5N5Đ: Cung đường vàng Osaka - Kyoto - Tokyo mùa thu "
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá "
                location1="Rừng tre Sagano"
                location2= "Chùa Thanh Thủy"
                location3="Công Viên Hoa Công Viên Yamanakako"
                price="23.990.000 VNĐ"
                />
                </Link>
                <Link to="/HaNoi-Tokyo-PhuSi">
                <TourChildren1
                image="image/tourNhatBan_Tokyo.jpg"
                title="Tour Trung Quốc 6N5Đ: Hà Nội - Tokyo - Phú Sĩ - Osaka - Kyoto"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate="13 đánh giá"
                location1="Hoàng cung Tokyo"
                location2= "Công viên Oishi"
                location3="Đền ngàn cổng Fushimi Inari Taisha"
                price="25.900.000 VNĐ"
                />
                </Link>

                <Link to="/HaNoi-CungDuongVangNuocNga">
                <TourChildren1
                image="image/tourNga.jpg"
                title="Tour Nga 8N7Đ: Hà Nội - Khám Phá Cung Đường Vàng Nước Nga Kì Vĩ"
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá "
                location1="Điện Kremlin"
                location2= "Cung điện mùa hè"
                location3="Quảng trường Đỏ"
                location4="Pháo đài Petro"
                price="8.990.000 VNĐ"
                 />
                </Link>
            
            </div>
            <a href="" className="see-more-tours">Xem thêm các Tours</a>
            </div>
            <div className="tour-winter">
            <h1>Chùm Tour Du Lịch Trượt Tuyết Mùa Đông</h1>
            <p>Khám phá mùa tuyết, trải nghiệm khác biệt</p>
            <div className='cardContainer'>
                <Link to="/Seoul-LotteWorld-DaoNamiMuaDong">
                <TourChildren1
                image="image/tourHanQuoc_DaoNamMuaDong.jpg"
                title="Tour Hàn Quốc 4N4Đ: Seoul - Lotte World - Đảo Nami Mùa Đông"
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="6 đánh giá "
                location1="Trượt Tuyết Elysian"
                location2= "Đảo Nami"
                location3="Làng Hanok Namsagoi"
                location4="Giải trí trắng xóa"
                price="15.990.000 VNĐ"
                 />
                </Link>
                <Link to="/HCM-DaiLien-CapNhiTan-LangTuyetHuong">
                <TourChildren1
                image="image/tourTrungQuoc_DaiLien.jpg"
                title="Tour Trung Quốc 6N5Đ: HCM - Đại Liên - Cáp Nhĩ Tân - Làng Tuyết Hương - Quảng Trường Tĩnh Hải"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate="7 đánh giá"
                location1="Công Viên Tuyết"
                location3="Công Viên Stalin"
                location4="Quảng Trường Tinh Hải Đại Liên"
                price="33.990.000 VNĐ"
                />
                </Link>
                <Link to="/HaNoi-Seoul-Nami-LangKoreanFolk">
                <TourChildren1
                image="image/tourHanQuoc_Busan.jpg"
                title="Tour Hàn Quốc 5N4Đ: Hà Nội - Seoul - Nami - Làng Korean Folk - Thư viện Starfield"
                emotion="8.3"
                feeling="Tuyệt vời"
                evaluate="3 đánh giá"
                location1="Đảo Nami"
                location2= "Tháp Nam San"
                location3="Hồ Seokchon"
                location4="Làng dân tộc Korean Folk"
                price="17.940.000 VNĐ"
                />
                </Link>
            
            </div>
            <div className='cardContainer'>
                <Link to="/HCM-CapNhiTan-VonlgaManor">
                <TourChildren1
                image="image/tourTrungQuoc_VonlgaManor.jpg"
                title="Tour Trung Quốc 5N4Đ: HCM - Cáp Nhĩ Tân - Vonlga Manor - A Bố Lực"
                emotion="8.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá "
                location1="Đạp xe trên đường tuyết"
                location2= "Công viên Gaya Theme"
                price="15.590.000 VNĐ"
                />
                </Link>
                <Link to="/HaNoi-Tokyo-Osaka-Kyoto">
                <TourChildren1
                image="image/tourNhatBan_TraiNghiemKimono.jpg"
                title="Tour Nhật Bản Mùa Đông 6N5Đ: Hà Nội - Tokyo  - Osaka - Kyoto - Trải Nghiệm Kimono"
                emotion="8.2"
                feeling="Rất tốt"
                evaluate="13 đánh giá"
                location1="Làng Văn Hóa Oshino Hakkai"
                location2= "Công viên Oishi"
                location3="Trải Nghiệm Kimono"
                price="27.900.000 VNĐ"
                />
                </Link>
                <Link to="/HaNoi-LaoCai-HaKhau-ConMinh">
                <TourChildren1
                image="image/tourTrungQuoc_ConMinh.jpg"
                title="Tour Trung Quốc Đường Bộ 4N4Đ: Hà Nội - Lào Cai - Hà Khẩu - Côn Minh - Núi Kiệu Tử"
                emotion="9.0"
                feeling="Tuyệt vời"
                evaluate="5 đánh giá "
                location1="Núi Kiệu Tử"
                location2= "Trải nghiệm tàu cao tốc"
                location3="Hồ Điện Trì"
                location4="Vương Quốc Chim Hải Âu"
                price="5.950.000 VNĐ"
                />
                </Link>
            
            </div>
            <a href="" className="see-more-tours">Xem thêm các Tours</a>
            </div>
        </div>
    )
    
}
export default TourComon;