import React, { useState } from "react";
import "./Voucher.css"
import VoucherValue from "./VoucherValue";
import VoucherQuantity from "./VoucherQuantity";

const samples = [
    {
        id: 1,
        name: "Mẫu 1",
        imgSrc: "image/voucher1.png"
    },
    {
        id: 2,
        name: "Mẫu 2",
        imgSrc: "image/voucher2.png"
    },
    {
        id: 3,
        name: "Mẫu 3",
        imgSrc: "image/voucher3.png"
    },
    {
        id: 4,
        name: "Mẫu 4",
        imgSrc: "image/voucher4.png"
    },
    {
        id: 5,
        name: "Mẫu 5",
        imgSrc: "image/voucher5.png"
    }
]
function Voucher(){
    const [checked, setChecked] = useState()
    const [imageSrc, setImageSrc] = useState('image/voucher1.png');
    return (
        <div>
            <div className="voucher-wrap">
            <div>
            <img src={imageSrc} alt="Voucher Preview" />
            </div>
            <div className="content-wrap">
                <h1>QÙA TẶNG</h1>
                <h2>ĐỘC ĐÁO VÀ Ý NGHĨA</h2>
                <div className="container-content">
                    <h6>Lưu giữ khoảnh khắc</h6>
                    <p>Voucher được thiết kế dựa trên hình ảnh và thông điệp mà 
                        bạn muốn dành tặng cho những người thân thương</p>
                    <h6>Tận hưởng hành trình</h6>
                    <p>Voucher cho những hành trình, trải nghiệm và khoảnh khắc kỳ
                         diệu được trân trọng mãi mãi</p>
                    <h6>Tự tạo món quà độc đáo của riêng bạn tặng cho người thân:</h6>  
                    <p>B1: Chọn mẫu Voucher</p>  
                    <p>B2: Gửi ảnh để iVIVU thiết kế voucher cho riêng bạn</p>
                    <p>B3: Thanh toán và nhận voucher</p> 
                </div>
                <h6>Mẫu voucher</h6>
                <div>
                    {samples.map( sample => (
                        <div className="voucherSample" key={sample.id}>
                        <input type="radio"
                                checked = {checked === sample.id}
                                onChange={() => {setChecked(sample.id); setImageSrc(sample.imgSrc);}}

                        />
                        <span> </span>
                        {sample.name}
                </div>
            ))}
            </div>
                
                <h6>Giá trị của voucher</h6>
                <VoucherValue/>
                <h6>Số lượng</h6>
                <VoucherQuantity/>
            </div>
        </div>
        </div>
    )
}
export default Voucher;