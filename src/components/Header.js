import { useEffect, useState, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=() => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus=useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    useEffect( () => {
    },[btnName]);

    return(
        <div className="flex justify-between items-center bg-pink-100 sm:bg-green-100 shadow-lg">
            <div>
                <img className = "w-48" src={LOGO_URL}/>
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li className="px-2">
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <li className="px-2 font-bold">
                        {loggedInUser}
                    </li>
                    <li className="px-2">
                        <button className="" onClick={() =>{
                            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                        } }>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;