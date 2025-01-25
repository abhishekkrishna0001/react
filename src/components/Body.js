import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

// let listOfRestaurant=[
//       {
//         "info": {
//           "id": "699427",
//           "name": "Domino's Pizza",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/d3f2568c-7049-41ef-8479-533129037f29_699427.jpg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 4.4,
//           "sla": {
//             "deliveryTime": 25
//           }
//         }
//       },
//       {
//         "info": {
//           "id": "699428",
//           "name": "KFC",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/d3f2568c-7049-41ef-8479-533129037f29_699427.jpg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 3.8,
//           "sla": {
//             "deliveryTime": 25
//           }
//         }
//       },
//       {
//         "info": {
//           "id": "699429",
//           "name": "Mcd",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/d3f2568c-7049-41ef-8479-533129037f29_699427.jpg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 4.2,
//           "sla": {
//             "deliveryTime": 25
//           }
//         }
//       }
// ];

const Body=() => {
    //const [listOfRestaurants, setListOfRestaurants]=useState(resList);
    const arr=useState(resList);
    //const [listOfRestaurants, setListOfRestaurants]=arr;
    const listOfRestaurants= arr[0];
    const setListOfRestaurants=arr[1];
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                        {
                            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating>4.5);
                            setListOfRestaurants(filteredList);
                        }
                    }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )
                )}
            </div>
        </div>
    );
};

export default Body;