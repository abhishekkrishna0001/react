import { Link } from "react-router";
import { RESTAURANTS_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body=() => {

    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText,setSearchText]=useState("");

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                    <Link className="RestaurantMenuLink" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                )
                )}
            </div>
        </div>
    );
};

export default Body;