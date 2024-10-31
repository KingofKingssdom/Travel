import React, { useState } from "react";
const samples = [
    {
        id: 1,
        name: "Mẫu 1",
    },
    {
        id: 2,
        name: "Mẫu 2",
    },
    {
        id: 3,
        name: "Mẫu 3"
    },
    {
        id: 4,
        name: "Mẫu 4"
    },
    {
        id: 5,
        name: "Mẫu 5"
    }
]
function VoucherSample(){
    const [checked, setChecked] = useState()
    return(
        <div>
            {samples.map( sample => (
                <div className="voucherSample" key={sample.id}>
                    <input type="radio"
                    checked = {checked === sample.id}
                    onChange={() => setChecked(sample.id)}
                    onClick={() => setChecked()}
                    />
                    <span> </span>
                    {sample.name}
                
                </div>
            ))}
        </div>
    )
}
export default VoucherSample;