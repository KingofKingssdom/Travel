import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
function TourDetailHeaderContent(props){
    return (
        <div>
            <div className="tourDetailContainer">
                  <div className="tourDetailDiv">
                    <div className="row">
                        <div className="col-6 departure-name">
                        <IoLocationOutline />
                            Khởi hành từ: <b>{props.location}</b>
                        </div>
                        <div className="col-6 code-name">
                            Mã Tour: <b>{props.code}</b>
                        </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="tourDetailLine">Tour trọn gói bao gồm</h3>
                    <div className="tourService">
                        <div>
                            <p><FaCheck className="check-icon"/> {props.item1} </p>
                            <p><FaCheck className="check-icon"/> {props.item2}</p>
                            <p><FaCheck className="check-icon"/> {props.item3}</p>
                        </div>
                        <div>
                            <p><FaCheck className="check-icon"/> {props.item4}</p>
                            <p><FaCheck className="check-icon"/> {props.item5}</p>
                            
                        </div>
                        <div>
                            <p><FaCheck className="check-icon"/> {props.item6}</p>
                            <p><FaCheck className="check-icon"/> {props.item7}</p>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    )
}
export default  TourDetailHeaderContent;