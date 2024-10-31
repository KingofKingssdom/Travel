import React, { useState } from "react";
const prices = [
    {
        id: 1,
        name: "1.000.000đ"
    },
    {
        id: 2,
        name: "2.000.000đ"
    },
    {
        id: 3,
        name: "5.000.000đ"
    }
]
function VoucherValue(){
    const [checked, setChecked] = useState()
   
    return(
        <div>
            {prices.map( price => (
                <div className="sectionValue" key={price.id}>
                    <input type="radio"
                    checked = {checked === price.id}
                    onChange={() => setChecked(price.id)}
                    />
                    <span> </span>
                    {price.name}
                </div>
            ))}
        </div>
    )
}
export default VoucherValue;