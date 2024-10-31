import React from "react";
function AirLineChildren2(props){
    return(
        <div>
            <a href="#">
                <img src={props.image} alt=""/>
                <div class="title-contentNg">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </a>
        </div>
    )
}
export default AirLineChildren2;