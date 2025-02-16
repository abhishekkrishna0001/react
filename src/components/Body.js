import { Link } from "react-router";
import { RESTAURANTS_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";

import { useEffect, useState } from "react";

const Body=() => {

    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const onlineStatus = useOnlineStatus();

    const [searchText,setSearchText]=useState("");

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    if(onlineStatus===false)
        return(
            <h1>Looks like you are offline!! Please check your internet connection</h1>
        );

    return listOfRestaurants.length===0 ? (<Shimmer />) : (
        <div className="">
            <div className="flex">
                <div className="p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredResList=listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredResList);
                    }}
                    >Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => 
                        {
                            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating>4.5);
                            setFilteredListOfRestaurants(filteredList);
                        }
                    }>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
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