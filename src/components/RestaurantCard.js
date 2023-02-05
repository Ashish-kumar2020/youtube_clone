import { IMG_CDN_URL } from "../constants";
import  '../../style.css'

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,costForTwoString,avgRating,locality

})=>{
    return(
        <>
            <div className="restaurant-card shadow-lg ">
                <img src={IMG_CDN_URL  + cloudinaryImageId} alt={cloudinaryImageId} />
                <h2 className="restaurant-name">{name}</h2>
                <h2 className="cuisines">{cuisines}</h2>
                <hr />
                <div className="flex justify-between"> 
                    <h2 className="rating">⭐️ <span>{avgRating}</span></h2>
                    <h2 className="distance">{lastMileTravelString}</h2>
                    <h2 className="cost">{costForTwoString}</h2>
                </div>
                <hr />
                <h2 className="locality">{locality}</h2>
            </div>
        </>
    )
}

export default RestaurantCard;