import React from "react"
function TourOverview(props){
    return(
        <div>
            <div className="tourDetailContainer">
                <div className="tourDetailDiv1">
                    <h3>{props.title}</h3>
                    <p>
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TourOverview