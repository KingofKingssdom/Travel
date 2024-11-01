import { BsPatchCheck } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { FaHeart} from "react-icons/fa";
function BookHotelFrame(props){
    return (
        <div>
            <div class="hotel-item-wrapper">
             <a href="">
                    <div class="hotel-item-combo">
                        <div class="combo-title">
                          <BsPatchCheck /> 
                            <span> </span>
                           {props.title}
                        </div>
                    </div>
                    <div class="hotel-item">
                        <div class="left">
                            <img src={props.image} alt="itemCommon"/>
                        </div>
                        <div class="center">
                            <div class="header">
                                <p class="name">
                                   <b>{props.name}</b> 
                                </p>
                                <p class="name">
                                    <span>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    <IoIosStar className="star-icon"/>
                                    </span>
                                    <FaHeart className="heart-icon"/>
                                    <span>
                                        <span> </span> 
                                        <span class="review-score">{props.score}</span>
                                        <span class="review-text">{props.text}</span>
                                        <span class="review-count">| {props.count}</span>
                                    </span>
                                </p>
                            </div>
                            <div class="highlights">
                                <div class="highlight1">
                                    <div class="super-tag">
                                       {props.tag1}
                                    </div>
                                    <div class="super-tag">
                                       {props.tag2}
                                    </div>
                                    <div class="super-tag">
                                       {props.tag3}
                                    </div>
                                    <div class="super-tag">
                                       {props.tag4}
                                    </div>
                                    <div class="super-tag">
                                       {props.tag5}
                                    </div>
                                </div>
                                <div class="highlight">
                                    <div class="pill-container">
                                        <div class="pill-title">
                                        <IoIosStar className="star1-icon"/>
                                        </div>
                                        <div class="pill-item">{props.item1}</div>
                                        <div class="pill-item">{props.item2}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="pricing">
                                <h5>{props.price}</h5>
                                <div class="pricing-room">
                                    <p>Gồm Buffet sáng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>      
        </div>
    )
}
export default BookHotelFrame;
