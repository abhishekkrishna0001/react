import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body=() => {

    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText,setSearchText]=useState("");

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9817001&lng=77.62841519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    useEffect(() => {
        fetchData();
    }, []);


    return listOfRestaurants.length===0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredResList=listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredResList);
                    }}
                    >Search</button>
                </div>
                <div className="filter-top">
                <button className="filter-btn" onClick={() => 
                        {
                            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating>4.5);
                            setFilteredListOfRestaurants(filteredList);
                        }
                    }>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {filteredListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )
                )}
            </div>
        </div>
    );
};

export default Body;