import React from "react";
import { IoIosStar } from "react-icons/io";
function HotelCommonChildren(props){
    return (
        <div>
            <a href="#s">
                    <div className="card">
                        <div className="box-img">
                            <img src={props.image} alt="ItemCommon"/>
                        </div>
                        
                        <div className="card-content">
                            <h5>{props.title}</h5>
                            <span>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    </span>
                            <span className="badge bg-success">{props.score}</span>
                            <span>{props.text}</span>
                            <p>
                                {props.content}
                            </p>
                            <h6>{props.price}</h6>
                        </div>
                    </div>
                </a>
        </div>
    )
}
export default HotelCommonChildren;