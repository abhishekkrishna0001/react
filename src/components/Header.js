import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./useOnlineStatus";


const Header=() => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus=useOnlineStatus();

    console.log("Header rendered");

    useEffect( () => {
        console.log("UseEffect Called");
    },[btnName]);

    return(
        <div className="flex justify-between items-center bg-pink-100 sm:bg-green-100 shadow-lg">
            <div className = "">
                <img 
                className = "w-48" src={LOGO_URL}
                />
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
                    <li className="px-2">
                        Cart
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