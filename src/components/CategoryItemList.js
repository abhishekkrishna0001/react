import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const CategoryItemList = ({items, dummy}) => {

console.log(dummy);

const dispatch =  useDispatch();

const handleAddItem = (item) => {
    dispatch(addItem(item));
};

    return (
        <div>
            {items.map((item) => (
                    <div data-testid="foodItems" key={item?.card?.info?.id} className="border-gray-200 border-b-2 p-2 m-2 text-left w-200 mx-auto flex justify-between">
                        <div className="w-9/12">    
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span> - ₹ {item?.card?.info?.price? item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
                            </div>
                            <div>
                                <p className="text-xs">{item?.card?.info?.description}</p>
                            </div>
                        </div>
                        <div className="w-3/12 p-4">
                            <img src={CDN_URL + item?.card?.info?.imageId}></img>
                            <button className="bg-black text-white p-2 rounded-lg mx-12 shadow-lg hover:cursor-pointer" onClick={() => handleAddItem(item)}>Add+</button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CategoryItemList;