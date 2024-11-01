
function HotelPageContent2(props){
    return(
        <div className="container">
                <div className="card">
                    <img src={props.image} alt="itemCommon"/>
                    <div className="info">
                      <h3>{props.name}</h3>
                      <p>{props.content}<u>{props.hotel}</u></p>
                    </div>
                </div>
               
        </div>
    )
}
export default HotelPageContent2;