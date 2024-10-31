import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

function TourOrder(props) {
    const [counter, setCounter] = useState(1);
    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const [counterChildren, setCounterChildren] = useState(0);
    const handleDecreaseChildren = () => {
        if (counterChildren > 0) {
            setCounterChildren(counterChildren - 1);
        }
    };
    const handleIncreaseChildren = () => {
        setCounterChildren(counterChildren + 1);
    };

    const [counterBaby, setCounterBaby] = useState(0);
    const handleDecreaseBaby = () => {
        if (counterBaby > 0) {
            setCounterBaby(counterBaby - 1);
        }
    };
    const handleIncreaseBaby = () => {
        setCounterBaby(counterBaby + 1);
    };

    // Tính tổng giá tour
    const adultPrice = props.adultPrice; // Giá tour cho người lớn
    const childPrice = props.childPrice; // Giá tour cho trẻ em
    const babyPrice = props.babyPrice; // Giá tour cho em bé

    const totalPrice = (counter * adultPrice) + (counterChildren * childPrice) + (counterBaby * babyPrice);

    // Hàm định dạng tiền
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    return (
        <div>
            <div className="bookContainer">
                <h4>Lịch trình và giá tour</h4>
                <p>Xem giá tour</p>
                <div className="box-white">
                    <div className="text">
                        Người lớn
                        <br /> &#62; 12 tuổi 
                    </div>
                    <div className="box-price">
                        {formatCurrency(adultPrice)}
                    </div>
                    <div className="group-btn">
                        <div onClick={handleDecrease}><RiSubtractFill /></div>
                        <div>{counter}</div>
                        <div onClick={handleIncrease}> <IoMdAdd /></div>
                    </div>
                </div>
                <div className="box-white">
                    <div className="text">
                        Trẻ em
                        <br /> 6 - 12 tuổi
                    </div>
                    <div className="box-price">
                        {formatCurrency(childPrice)}
                    </div>
                    <div className="group-btn">
                        <div onClick={handleDecreaseChildren}><RiSubtractFill /></div>
                        <div>{counterChildren}</div>
                        <div onClick={handleIncreaseChildren}> <IoMdAdd /></div>
                    </div>
                </div>
                <div className="box-white">
                    <div className="text">
                        Em bé 
                        <br /> &#60; 6 tuổi
                    </div>
                    <div className="box-price">
                        {formatCurrency(babyPrice)}
                    </div>
                    <div className="group-btn">
                        <div onClick={handleDecreaseBaby}><RiSubtractFill /></div>
                        <div>{counterBaby}</div>
                        <div onClick={handleIncreaseBaby}> <IoMdAdd /></div>
                    </div>
                </div>
                <div className="notification">
                    <BsInfoCircle /> Sau khi đặt tour, bạn sẽ nhận được cuộc gọi xác nhận từ nhân viên trong 15 phút. Vui lòng giữ liên lạc
                </div>
                <div className="totalTour">
                    <h5>Tổng giá Tour</h5> 
                    <h2>{formatCurrency(totalPrice)}</h2> 
                </div>
                <div className="">
                    <button className="contact-btn">Liên hệ tư vấn</button>
                    <button className="book-btn">Đặt tour ngay</button>
                </div>
            </div>
        </div>
    );
}

export default TourOrder;