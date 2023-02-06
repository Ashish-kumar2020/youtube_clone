import { useEffect, useState } from "react"
import  '../../style.css'
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";

const Body = () => {

    const[restaurant,setRestaurant] = useState([]);

    useEffect(()=>{
        getApiCall();
    },[]);   


    async function getApiCall() {
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
   

    return restaurant?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
            <div className="main-body flex flex-wrap">
               { restaurant.map((restaurantData) => {
                    return (
                        <Link to={"/restaurantDetail/"+ restaurantData.data.id} key={restaurantData.data.id}>
                            <RestaurantCard {...restaurantData.data}/>
                        </Link>
                    )
                })}
            </div>
        </>
    )
        
    
}

export default Body;