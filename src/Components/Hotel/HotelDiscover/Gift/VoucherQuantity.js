import React, { useState } from "react";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
function VoucherQuantity(){
    const [counter, setCounter] = useState(1)
    const handleDecrease = () => {
        if(counter ===1){

        }
        else if( counter > 1){
            setCounter (counter - 1)
        }
        
    }
    const handleIncrease = () => {
        setCounter (counter + 1)
    }
    return (
        <div>
            <div className="number-input">
                    <div className="decrease" onClick={handleDecrease}><RiSubtractLine /></div>
                    <div className="count">{counter}</div>
                    <div className="increase" onClick={handleIncrease}><IoMdAdd /></div>
            </div>
                <button className="buyButton">Chọn mua</button>
        </div>
    )
}
export default VoucherQuantity