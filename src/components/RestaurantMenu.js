import "../../style.css";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import MenuCard from "./MenuCard";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = ()=>{
    const[restaurantMenu,setRestaurantMenu] = useState([]);
    const [restaurantMenuItems, setRestaurauntMenuItems] = useState(null);
    const [detailMenuItem, setDetailMenuItem] = useState({});
    const { resId } = useParams();
    const dispatch = useDispatch();

    const addFoodItem = (item) => {
      dispatch(addItem(item));
    };

    useEffect(()=>{
        getApiCall();
    },[]);   


    async function getApiCall() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+ resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json.data);

        setRestaurauntMenuItems(json.data);
        setDetailMenuItem(json.data)
        // console.log(restaurantMenu)
        return restaurantMenuItems;
    }

    // Early return in case data does't gets loaded form api
    if(!restaurantMenuItems){
        return;
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
                     <div className="flex">
                        <div className="search-bar shadow-lg">
                                <input type="text"placeholder="Search for dishes..."/>
                        </div>
                        <div className="pureVeg shadow-lg">
                                <h2 className="veg-nonVeg">{restaurantMenu?.isVeg ? "🟢 " : "🔴"}</h2>
                        </div>
                        <div className="shadow-lg">
                            <button className="favourite favourite-btn">Favourite</button>
                        </div>
                     </div>
                </div>
                <div className="restaurant-offer">
                    <fieldset><span className="offers">{restaurantMenu?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</span>
                    <br />
                    <span className="offerType">{restaurantMenu?.aggregatedDiscountInfo?.descriptionList[0]?.operationType}</span>
                    </fieldset>
                </div>
               
            </div>
        <div className="flex flex-wrap ">
        <div className="menuItems">
            <ul className="menuItemsList"> 
                <h1 className="recommended">Recommended</h1>
                {Object.values(restaurantMenuItems?.menu?.items).map((item) => (
                    <li className="foodList" key={item.id}>
                    {(item.name).substring(0, 40)} 
                    <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
                    </li>
                ))} 
            </ul>
            
          </div>
            
            <div className="detailed-menu-card ">
                    <MenuCard menu = {detailMenuItem?.menu?.items}/>
            </div>
        </div>
          
         
        </>
    )
}

export default RestaurantMenu;