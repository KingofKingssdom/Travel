import React from "react";
function TourChildrent1(props){
    return(
        <div>
                <div className="container-tour">
                        <img src={props.image} alt=""/>
                        <div className="tour-title">
                            <p><b>{props.title}</b></p>
                        </div>
                        <div className="tour-evaluate">
                            <span className="badge bg-success">{props.emotion}</span> 
                            <span className="feeling"> <b>{props.feeling}</b> </span>
                            <span className="evaluate">| {props.evaluate}</span>
                        </div> 
                        <div className="tour-location">
                            <p>{props.location1} | </p>
                            <p>{props.location2} | </p>
                            <p>{props.location3} | </p>
                            <p>{props.location4} | </p>
                        </div>
                        <h5 className="price">{props.price}</h5>
                    </div>
        </div>
    )
}
export default TourChildrent1;