import "./TourDetail.css"
import { useState } from "react";
import TourDetailHeaderContent from "./Detail/TourDetailHeaderContent";
import Calsorel from "./Detail/Calrosel";
import TourOverview from "./Detail/TourOverview";
import TourOrder from "./Detail/TourOrder";
import TourIntroduce from "./Detail/TourIntroduce";
import TourDescription from "./Detail/TourDescription";
const images = [
    '/image/toaNhacabaret.png',
    'image/arunThailan.png',
    'image/baoTangThailan.png',
    'image/artThailan.png',
    'image/khungLongNong.png',
    'image/chanPhatSonThailan.png',
    'image/duThuyenThailan.png',

]


function TourDetailThaiLan(){
    const [panelStates, setPanelStates] = useState({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: false
    });

    const handleShow = (panelId) => {
        setPanelStates((prevStates) => ({
            ...prevStates,
            [panelId]: !prevStates[panelId]
        }));
    };
    return(
        <div className="body">
            <div className="page">
            <h1><b>Tour Thái Lan 5N4Đ: Bangkok - Pattaya - Công Viên Khủng Long (Bay Sáng, Trưa)</b></h1>
            
            <div className="row">
                <div className="col-8">
                    <div className="anh">
                        <Calsorel images={images}/>
                    </div>
                    <div>
                        <TourDetailHeaderContent
                        location="Hồ Chí Minh"
                        code="TO4235"
                        item1="Vé máy bay"
                        item2="Xe tham quan"
                        item3="Bảo hiểm du lịch"
                        item4="Khách sạn 3-4*"
                        item5="Vé tham quan"
                        item6="Bữa ăn"
                        item7="Hướng dân viên"
                        />
                    </div>
                    <div>
                        <TourOverview
                        title="Những trải nghiệm thú vị trong tour"
                        content={
                            <p>- Chiêm ngưỡng tượng Phật Vàng tại chùa Wat Traimit, biểu tượng tâm linh nổi tiếng. <br>
                            </br> - Khám phá Pattaya sôi động, thành phố biển không bao giờ ngủ.
                            <br/> - Hòa mình vào thế giới tiền sử đầy ấn tượng tại Công viên Khủng Long.
                            <br/> - Thư giãn trên bãi biển đảo Coral, tham gia các hoạt động thể thao dưới nước thú vị.
                            <br/> - Thưởng thức show diễn nghệ thuật hoành tráng, mang đậm văn hóa Thái Lan, và thỏa sức mua sắm tại các chợ đêm sầm uất.
                            </p>
                        }
                        />
                    </div>
                    <div>
                    <div>
            <div className="tourChedule">
                <div className="tourCheduleTitle">
                    <h3>Chương trình tour</h3>
                    <div>
                        <div onClick={() => handleShow('panel1')} className={`panel ${panelStates.panel1 ? 'open' : ''}`}>
                            <TourIntroduce
                                image="./image/pattaya.png"
                                day="NGÀY 1"
                                title="TP.HCM - BANGKOK (ĂN TRƯA NHẸ TRÊN MÁY BAY)"
                            />
                            <div className={`show ${panelStates.panel1 ? 'open' : ''}`}>
                                {panelStates.panel1 && 
                                <TourDescription 
                                contents={
                                    <div className="contentTour">
                                        <p>Sáng trưởng đoàn đón quý khách tại sân bay Tân Sơn Nhất, làm thủ tục xuất cảnh đi Bangkok.
                                            <br/> Đến Thái Lan, hướng dẫn viên địa phương đón đoàn đi dùng bữa trưa nhẹ trong sân bay. 
                                            Xe đưa đoàn đến với <b>Thành Phố Biển Pattaya</b> - Được mệnh danh là “Thành phố không ngủ”.
                                        </p>
                                        <img src="./image/pattaya.png" alt=""/>
                                        <p className="imageDescription"><i>Thành Phố Biển Pattaya.</i></p> 
                                        <p>Đoàn dùng bữa tối BBQ - Lẩu hái sản. Sau đó thưởng thức chương trình vô cùng hoành tráng do các vũ 
                                            công chuyển đổi giới tính biểu diễn - <b>Thailand Must See Show.</b></p>
                                            <img src="./image/danceThaiLan.png" alt=""/>
                                            <p className="imageDescription"><i>Màn trình diễn rực rỡ sắc màu tại show vũ công chuyển giới.</i></p>
                                            <p>Xe đưa đoàn nhận phòng khách sạn nghỉ ngơi. Tự do khám phá Pattaya về đêm.</p>
                                    </div>  
                                } />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel2')} className="panel">
                            <TourIntroduce
                                image="./image/chanPhatSonThailan.png"
                                day="NGÀY 2"
                                title="PATTAYA (ĂN SÁNG, TRƯA, TỐI)"
                            />
                            <div className="show">
                                {panelStates.panel2 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Quý khách dùng điểm tâm sáng tại khách sạn, HDV đưa đoàn ra đảo san hô bằng tàu cao tốc.
                                            <br/><b>Đảo Koh Larn</b> - Nằm trong vịnh Thái Lan có bờ cát trắng, làn nước trong xanh. 
                                            Quý khách tự do tắm biển hoặc tự túc tham gia các trò chơi ngoài đảo: lặn biển, dù kéo, chuối kéo,…</p>
                                        <img  src="./image/daoKohLarn2.jpg" alt=""/>
                                       <p className="imageDescription"><i>Khung cảnh thiên đường của Đảo San Hô Koh Larn.</i></p> 
                                        <p>Trưa trở lại đất liền dùng cơm trưa chuẩn bị cho chuyến tham quan buổi chiều.
                                            <br/><b>Trung tâm di sản trầm hương quốc gia</b> - Vua của các mùi hương. Phật giáo gọi là: hương thơm 
                                            của niết bàn Công giáo gọi là: hương thơm của chúa.
                                            <br/><b>Trân Bảo Phật Sơn</b> - Ngọn núi Phật Vàng độc đáo với hình tượng Đức Phật dược khắc laser thẳng 
                                            vào núi và dát vàng tổng số lượng vàng lên tới 999kg 24k.</p>
                                        <img src="./image/chanPhatSonThailan.png" alt=""/>
                                        <p className="imageDescription"><i>Trân Bảo Phật Sơn: Phật vàng khổng lồ uy nghiêm.</i></p>
                                        <p>Trung tâm nghiên cứu giấc ngủ Hoàng Gia Thái Lan.
                                        <br/><b>Đoàn viếng Chùa Phật Lớn (Wat Phra Yai)</b> - Nằm trên đỉnh Đồi Pratumnak giữa Pattaya 
                                        và Bãi biển Jomtien. Xây dựng từ những năm 1940 khi Pattaya còn là làng chài, chùa nổi tiếng với 
                                            Tượng Phật Lớn linh thiêng, thu hút đông đảo người dân địa phương đến cầu nguyện.</p>
                                            <img src="./image/tourThaiLan.png" alt=""/>
                                            <p className="imageDescription"><i>Cổng rồng vàng hùng vĩ tại Chùa Phật Lớn.</i></p>
                                        <p>Tối quý khách tự do khám phá <b>Walking Street</b> - Hoặc tự túc đăng ký các “Show diễn kỳ thú” về đêm có một không hai chỉ có tại Pattaya.</p>
                                    </div>
                                    
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel3')} className="panel">
                            <TourIntroduce
                                image="./image/khungLongNong.png"
                                day="NGÀY 3"
                                title="PATTAYA (ĂN SÁNG, TRƯA, TỐI)"
                            />
                            <div className="show">
                                {panelStates.panel3 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Đoàn dùng buffet sáng tại khách sạn, trả phòng, sau đó tham quan:
                                            <br/><b>Nong Nooch Garden</b> - Một trong những khu vườn nhiệt đới lớn nhất Đông Nam Á.</p>
                                        <img src="./image/khungLongNong.png" alt=""/>
                                        <p className="imageDescription"><i>Nong Nooch Garden: Khu vườn nhiệt đới rộng lớn.</i></p>
                                        <p><b>Bảo tàng ánh sáng Lighting Art & Vườn khinh khí cầu</b> - Một khu phức hợp mới với những sự sáng tạo; 
                                        kết hợp giữa sự cổ điển và công nghệ hiện đại từ ánh đèn lung linh, đến những chiếc khinh khí cầu đầy màu sắc và những chiếc xe hơi cổ xưa.</p>
                                        <img src="./image/artThailan.png" alt=""/>
                                        <p className="imageDescription"><i>Vườn Khinh Khí Cầu Thái Lan: Một thế giới lung linh ánh sáng và màu sắc.</i></p> 
                                       
                                          <p><b>Trung tâm nghiên cứu rắn độc</b> - Đến đây quý khách sẽ được xem những màn xiếc rắn độc đáo và tìm hiểu về y học của người Thái.
                                        <br/>Đoàn dùng lẩu Suki, về khách sạn nhận phòng, tự do tham quan Bangkok về đêm.</p>
                                    </div>
                                    
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel4')} className="panel">
                            <TourIntroduce
                                image="./image/baoTangThailan.png"
                                day="NGÀY 4"
                                title="BANGKOK - MUA SẮM (ĂN SÁNG, TRƯA, TỐI)"
                            />
                            <div className="show">
                                {panelStates.panel4 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Đoàn dùng điểm tâm sáng tại khách sạn.
                                        <br/>Ghé thăm <b>bảo tàng Chaophraya</b> và ngắm nhìn các cổ  vật có tuổi đời hàng nghìn năm.</p>
                                        <img src="./image/baoTangThailan.png" alt=""/>
                                        <p className="imageDescription"><i>Bảo  tàng Chaopharaya</i></p>
                                        <p>Đoàn dùng bữa trưa Buffet 5***** tại nhà hàng xoay Baiyoke Sky 86 Tầng với hơn trăm món ăn ngon từ Á đến Âu.
                                        <br/>Sau đó tự do tham quan mua sắm tại các trung tâm mua sắm & siêu thị như Big C, Central World, Siam Paragon hay chợ sỉ Platinum,…
                                        <br/>Quý khách tự túc bữa tối.
                                        <br/>Đến giờ hẹn xe và HDV đón đoàn về khách sạn, nhận phòng nghỉ ngơi. Nghỉ đêm tại Bangkok.</p>
                                    </div>      
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel5')} className="panel">
                            <TourIntroduce
                                image="./image/arunThailan.png"
                                day="NGÀY 5"
                                title="BANGKOK - TP. HỒ CHÍ MINH"
                            />
                            <div className="show">
                                {panelStates.panel5 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Máy bay hạ cánh xuống Sân bay QT TSN. Quý khách làm thủ tục nhập cảnh trở lại Việt Nam và 
                                            lấy hành lý. HDV chào tạm biệt Quý khách kết thúc chương trình tham quan.</p>
                                    </div>      
                            }
                                />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="order">
                        <TourOrder
                        adultPrice= "5990000"
                        childPrice="5990000"
                        babyPrice="2000000"
                        />
                    </div>
                </div>
            </div>  
            </div>
            
        </div>
    )
}
export default TourDetailThaiLan;