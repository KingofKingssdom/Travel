import { IoIosArrowDown } from "react-icons/io";

function TourIntroduce(props){
    return(
        <div>

            <div className="panel-container">
                <div className="panel-left">
                    <img src={props.image} alt="itemCommon"/>
                </div>
                <div className="panel-center">
                    <p>{props.day}</p>
                    <p>{props.title}</p>
                </div>
                <div className="panel-right">
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    )
}
export default TourIntroduce;