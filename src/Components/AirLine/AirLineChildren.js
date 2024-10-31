import { FaArrowRightArrowLeft } from "react-icons/fa6";
import React from "react";
function AirLineChildren(props){
    return(
        <div>
            <div class="box-ticket">
                        <div class="box-ticket-content1">
                            <div>
                                <h5>{props.start}</h5>
                                <p>{props.dayStart}</p>
                            </div>
                            <FaArrowRightArrowLeft />
                            <div>
                                <h5>{props.end}</h5>
                                <p>{props.dayEnd}</p>
                            </div>
                            <img src={props.image} alt=""/>
                        </div>
                        <div class="box-ticket-content2">
                            <h4 class="text text-info">{props.price}</h4>
                            <a href="">
                                <button class="button-see">Xem</button>
                            </a>
                        </div>
                    </div>
        </div>
    )
}
export default AirLineChildren;