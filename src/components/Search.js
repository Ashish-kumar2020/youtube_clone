import {useState, useEffect} from "react";
import { filterData } from "../utils/helper";
import  '../../style.css'
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";


const Search = ()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const[searchData,setSearchData] = useState([]);

    useEffect(()=>{
        getApiCall();
    },[]);   


    async function getApiCall() {
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setSearchData(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        return searchData;
    }
    // if (!allRestaurants) return null;
    
    return <>
        <div className="serach-container">
            <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(e)=>[
                setSearchText(e.target.value)
            ]}/>
        <button className="search-btn" onClick={()=>{
           const data = filterData(searchText, allRestaurants);
           // update the state - restaurants
           setFilteredRestaurants(data);
        }}>
            Search
        </button>

        <div className="flex flex-wrap " data-testid="res-list">
        
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.length > 0 ? filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurantDetail/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} /> 
            </Link>
             
             ) 
             
        }): <h1>Plz search for restaurant</h1>}
      </div>
        </div>
    
    </>
}

export default Search;