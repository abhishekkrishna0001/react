import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory"
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const dummy="dummy data";

    const restaurantMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(restaurantMenu == null)
        return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = restaurantMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const categories = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index) => 
                <RestaurantMenuCategory key={category?.card?.card?.title} data={category?.card?.card} 
                showItems={index==showIndex ? true:false} setShowIndex={() => setShowIndex(index)} dummy={dummy}/>
            )}
        </div>
    );
};

export default RestaurantMenu;