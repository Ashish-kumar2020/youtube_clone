

import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
const CarouselCard = ({creativeId})=>{
    
 
    return (
        <>
        <div className="carousel-parent">
        
            <div className="carousal-card"> 
                <img className='carousal-img' src={IMG_CDN_URL + creativeId} alt="" />
            </div>
           
           </div>
        </>
    )
}

export default CarouselCard;