import CategoryItemList from "./CategoryItemList";
import { useState } from "react";

const RestaurantMenuCategory = ({data,showItems,setShowIndex,dummy}) => {

    const handleClick = () => {
        setShowIndex();
    };

    return(
        <div>
            <div className="bg-gray-50 p-4 shadow-lg my-4 w-200 flex justify-between mx-auto cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards.length})</span>
                {!showItems && <span>⬇</span>}
                {showItems && <span>⬆</span>}
            </div>
            {showItems && <CategoryItemList items={data?.itemCards} dummy={dummy}/>}
        </div>
    );
};

export default RestaurantMenuCategory;