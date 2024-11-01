import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

 
const Calsorel = ({images})=>{
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const goToPrevious = () =>{
            const isFirstImage = currentIndex === 0;
            const newIndex = isFirstImage ? images.length - 1 : currentIndex -1;
            setCurrentIndex(newIndex)
        };

        const goToNext = () =>{
            const isLastImage = currentIndex === images.length -1 ;
            const newIndex = isLastImage ? 0 : currentIndex  + 1;
            setCurrentIndex(newIndex)
        };
    return(
        <div>
             <img src={images[currentIndex]} alt="itemCommon"/>
             <div className="button-calrosel">
             <button onClick={goToPrevious} id="prev"><FaArrowLeft /></button>     
             <button onClick={goToNext} id="next"><FaArrowRight /></button>
             </div>
            
        </div>
    )
}
export default Calsorel;