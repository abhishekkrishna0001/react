import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {  
    const {resData}= props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

    console.log(resData?.info);

    const {deliveryTime} = resData?.info?.sla;

    return(
        <div className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="res-card" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;