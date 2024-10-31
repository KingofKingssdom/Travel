import "./TourDetail.css"
import { useState } from "react";
import TourDetailHeaderContent from "./Detail/TourDetailHeaderContent";
import Calsorel from "./Detail/Calrosel";
import TourOverview from "./Detail/TourOverview";
import TourOrder from "./Detail/TourOrder";
import TourIntroduce from "./Detail/TourIntroduce";
import TourDescription from "./Detail/TourDescription";
const images = [
    '/image/tourDetailChauau1.png',
    'image/tourDetailChauau2.png',
    'image/tourDetailChauau3.png',
    'image/tourDetailChauau4.png',
    'image/tourDetailChauau5.png',
    'image/tourDetailChauau6.png',
    'image/tourDetailChauau7.png',

]


function TourDetailChauau(){
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
            <h1><b>Tour Châu Âu 5N4Đ: TP.HCM - Khám phá Pháp - Thụy Sĩ - Ý - Vatican</b></h1>
            
            <div className="row">
                <div className="col-8">
                    <div className="anh">
                        <Calsorel images={images}/>
                    </div>
                    <div>
                        <TourDetailHeaderContent
                        location="Hồ Chí Minh"
                        code="TO2118"
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
                        content="Trải nghiệm hành trình tuyệt vời từ TP.HCM đến Paris, 
                        thủ đô ánh sáng với những điểm tham quan nổi bật như Khải Hoàn Môn, 
                        Tháp Eiffel và du thuyền trên sông Seine. Khám phá Nancy và Colmar với kiến trúc cổ kính, 
                        tiếp tục đến Lucerne và Zurich với hồ nước và cầu gỗ nổi tiếng. Đắm mình trong vẻ đẹp thơ 
                        mộng của Venice, chiêm ngưỡng Tháp Nghiêng Pisa và những công trình lịch sử tại Rome như 
                        Đấu Trường La Mã và Tòa thánh Vatican."
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
                                image="./image/tourDetailChauau4.png"
                                day="NGÀY 1"
                                title="TP.HCM - PARIS (ĂN SÁNG TRÊN MÁY BAY)"
                            />
                            <div className={`show ${panelStates.panel1 ? 'open' : ''}`}>
                                {panelStates.panel1 && 
                                <TourDescription 
                                contents={
                                    <div className="contentTour">
                                        <p>Trưa: HDV đón Quý khách tại Cổng D2 Ga đi QT Sân bay
                                             TSN làm thủ tục xuất cảnh đi Paris, Pháp. Quá cảnh tại Quảng Châu. 
                                             Quý khách ăn uống, nghỉ ngơi trên máy bay.
                                        </p>
                                        <p>Lịch Chuyến Bay</p>
                                        <p>CZ 374 SGN – CAN 15:45 – 19:40</p>
                                        <p>CZ 347 CAN – CDG 00:20 – 06:50 (+1)</p>
                                    </div>  
                                } />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel2')} className="panel">
                            <TourIntroduce
                                image="./image/tourDetailChauau2.png"
                                day="NGÀY 2"
                                title="PARIS - LONDON (ĂN TRƯA TRÊN MÁY BAY)"
                            />
                            <div className="show">
                                {panelStates.panel2 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Máy bay hạ cánh xuống Sân bay Charles de Gaulle – Pháp, Quý khách làm thủ tục nhập cảnh. 
                                            Xe đón và đưa Quý khách khởi hành tham quan Thủ đô Paris, Pháp – nơi được mệnh danh là 
                                            “Kinh đô Ánh sáng”, là cái nôi của văn hóa, nghệ thuật và kiến trúc. Paris từ lâu đã trở 
                                            thành điểm du lịch thu hút đông đảo quan khách, và lãng mạn bậc nhất thế giới:</p>
                                        <p><b>Arc De Triomphe – Khải Hoàn Môn</b>: Một công trình kiến trúc biểu tượng cho lịch sử nước Pháp, 
                                        cổng vòm này luôn sừng sững tráng lệ giữa thành phố với kiến trúc vòm độc đáo. Tại Khải Hoàn Môn còn khắc tên 
                                        của hàng trăm Danh Tướng đã điều khiển Đại Quân Pháp trong các chiến công của thời đại Napoléon. </p>
                                        <img  src="./image/tourDetailChauau2.png" alt=""/>
                                       <p className="imageDescription"><i>Khải Hoàn Môn, là một trong những công trình biểu tượng của Nước Pháp.</i></p> 
                                        <p><b>Tháp Eiffel</b> - Một công trình kiến trúc bằng thép nằm bên sông Seine, được xem như là biểu tượng của nước 
                                            Pháp và là công trình kỷ niệm 100 năm cách mạng Pháp (tham quan bên ngoài). </p>
                                        <img src="./image/tourDetailChauau5.png" alt=""/>
                                        <p className="imageDescription"><i>Tháp Eiffel, niềm tự hào của người Pháp.</i></p>
                                        <p>Trưa: Quý khách dùng cơm trưa tại nhà hàng địa phương. Sau đó, Quý khách tiếp tục hành trình tham quan</p>
                                        <p>Trải nghiệm Ngồi thuyền <b>Bateaux Parisiens trên Sông Seine</b> – Quý khách sẽ được ngắm nhìn những di sản văn hóa 
                                            thế giới được UNESCO công nhận tại Paris trên chuyến du thuyền và tận hưởng vẻ đẹp thơ mộng của những địa điểm 
                                            nổi bật bên 2 bờ sông Seine - luôn là nguồn cảm hứng bất tận của bất kỳ thi sĩ, nhà thơ hay nhà hội họa nào (Đã bao gồm vé du thuyền).</p>
                                    </div>
                                    
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel3')} className="panel">
                            <TourIntroduce
                                image="./image/tourDetailChauau1.png"
                                day="NGÀY 3"
                                title="VENICE - PISA (ĂN SÁNG, TRƯA, TỐI)"
                            />
                            <div className="show">
                                {panelStates.panel3 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Sáng: Quý khách dùng điểm tâm sáng và làm thủ tục trả phòng khách sạn. Sau đó, xe đưa Quý khách khởi hành đi Pisa.</p>
                                        <p>Trưa: Quý khách dùng cơm trưa tại nhà hàng địa phương. Sau đó, Quý khách tham quan (chụp ảnh bên ngoài):</p>
                                        <p><b>Tháp Nghiêng Pisa</b> – là một tòa tháp chuông tại thành phố Pisa được khởi xây năm 1173 là biểu tượng du lịch của nước Ý, được UNESCO công nhận là di sản thế giới.</p>
                                        <img src="./image/thapNghiengPisa.png" alt=""/>
                                        <p className="imageDescription"><i>Tháp Nghiêng Pisa.</i></p>
                                        <p>Piazza dei Miracoli – Quảng trường Mầu nhiệm là một khu vực có tường bao rộng 8,87 hecta nằm ở Pisa, Toscana, Ý. 
                                            Đây là một trung tâm quan trọng của nghệ thuật thời Trung Cổ ở châu Âu và là một trong những khu phức hợp kiến
                                             trúc bảo quản tốt nhất trên thế giới. Nó được Giáo hội Công giáo coi là một nơi linh thiêng.</p>
                                        <img src="./image/piazzaDei.png" alt=""/>
                                        <p className="imageDescription"><i>Piazza dei Miracoli.</i></p> 
                                        <p><b>Nhà rửa tội thánh John ở Pisa (Pisa Baptistery)</b> – Là một phần của quảng trường Miracle cùng với 
                                            nhà thờ chính tòa và tháp nghiêng tạo thành một quần thể kiến trúc độc đáo với tông màu
                                             trắng làm chủ đạo nổi bật trên nền cỏ xanh của quảng trường và màu xanh của trời.Nhà rửa 
                                             tội thánh John ở Pisa (Pisa Baptistery) – Là một phần của quảng trường Miracle cùng với 
                                             nhà thờ chính tòa và tháp nghiêng tạo thành một quần thể kiến trúc độc đáo với tông màu trắng làm 
                                             chủ đạo nổi bật trên nền cỏ xanh của quảng trường và màu xanh của trời.</p>
                                    </div>
                                    
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel4')} className="panel">
                            <TourIntroduce
                                image="./image/dauTruongLama.jpg"
                                day="NGÀY 4"
                                title="ROME - CITY TOUR - VATICAN - AIRPORT (ĂN SÁNG, TRƯA, TỐI)"
                            />
                            <div className="show">
                                {panelStates.panel4 && 
                                <TourDescription 
                                contents = {
                                    <div className="contentTour">
                                        <p>Sáng: Quý khách dùng điểm tâm sáng và làm thủ tục trả phòng khách sạn. Sau đó, xe đưa Quý khách khởi hành tham quan (chụp ảnh bên ngoài):</p>
                                        <p><b>Đấu trường La Mã Coloseum</b> – là một đấu trường lớn ở thành phố Roma, nơi các đấu sĩ có những cuộc tử đấu</p>
                                        <img src="./image/dauTruong.png" alt=""/>
                                        <p className="imageDescription"><i>Đấu Trường La Mã Coloseum</i></p>
                                        <p>Trưa: Quý khách dùng cơm trưa tại nhà hàng địa phương. Sau đó, xe đưa Quý khách khởi hành tham quan (chụp hình bên ngoài):</p>
                                        <p><b>Tòa thánh Vatican</b> – Cũng được xem là 1 quốc gia trong 1 quốc gia tại Italy</p>
                                        <img src="./image/toaThanhVatican.png" alt=""/>
                                        <p className="imageDescription"><i>Tòa Thánh Vatican.</i></p> 
                                        <p><b>Quảng trường thánh Saint Peter</b>  – được xây bởi Hoàng đế Constantine năm 324 sau công nguyên.</p>
                                        <p>Chiều: Quý khách dùng cơm tối tại nhà hàng địa phương. Xe đưa Quý khách về khách sạn nghỉ ngơi. Nghỉ đêm tại Rome.</p>
                                    </div>      
                            }
                                />}
                            </div>
                        </div>

                        <div onClick={() => handleShow('panel5')} className="panel">
                            <TourIntroduce
                                image="./image/tourDetailChauau7.png"
                                day="NGÀY 5"
                                title="TP. HỒ CHÍ MINH"
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
                        adultPrice= "61000000"
                        childPrice="59000000"
                        babyPrice="19000000"
                        />
                    </div>
                </div>
            </div>  
            </div>
            
        </div>
    )
}
export default TourDetailChauau;