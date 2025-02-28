import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="m-2 p-2 bg-black text-white rounded-lg hover:cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            <CategoryItemList items={cartItems}></CategoryItemList>
            {cartItems.length==0 && <h1>Cart is empty. Add Items to the cart!</h1> }
        </div>
    );
};

export default Cart;