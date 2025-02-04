import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const {resId} = useParams();

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json?.data);
    };

    useEffect(() => {
        fetchMenu();
    },[]);

    if(restaurantMenu == null)
        return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = restaurantMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;