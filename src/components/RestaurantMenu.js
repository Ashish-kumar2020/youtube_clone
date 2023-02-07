import "../../style.css";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = ()=>{
    const[restaurantMenu,setRestaurantMenu] = useState([]);
    const { resId } = useParams();

    useEffect(()=>{
        getApiCall();
    },[]);   


    async function getApiCall() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+ resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json.data);
        return restaurantMenu;
    }


    return(
        <>
            <div className="restaurant-card-details flex">
                <div className="restaurant-img">
                    <img src={IMG_CDN_URL+restaurantMenu?.cloudinaryImageId} alt="" />
                </div>
                <div className="restaurant-details">
                    <h2 className="restaurant-menu-name">{restaurantMenu?.name}</h2>
                    <h2 className="restaurant-cuisins">{restaurantMenu?.cuisines}</h2>
                    <h2 className="restaurant-cuisins">{restaurantMenu?.locality}</h2>
                    <div className="flex justify-between"> 
                        <div className="ratingDiv">
                            <h2 className="ratings restaurant-rating">⭐️ <span>{restaurantMenu?.avgRating}</span></h2>
                            <h2 className="totalRating">{restaurantMenu?.totalRatingsString}</h2>
                        </div>
                        <div className="vl"></div>
                        <div className="ratingDiv">
                            <h2 className="distances">{36+" min"}</h2>
                            <h2 className="delivery-time">{"Delivery Time"}</h2>
                        </div>
                        <div className="vl"></div>
                        <div className="ratingDiv">
                            <h2 className="costs">{"₹"+(restaurantMenu?.costForTwo)/100}</h2>
                            <h2 className="costsTwoString">{restaurantMenu?.costForTwoMsg}</h2>
                        </div>
                     </div>
                     <div className="search-bar">
                            <input type="text" />
                    </div>
                    <div className="pureVeg">

                    </div>
                </div>
                <div className="restaurant-offer">
                    <fieldset><span className="offers">{restaurantMenu?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</span>
                    <br />
                    <span className="offerType">{restaurantMenu?.aggregatedDiscountInfo?.descriptionList[0]?.operationType}</span>
                    </fieldset>
                </div>
               
            </div>
        </>
    )
}

export default RestaurantMenu;