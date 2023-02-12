import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import Checkout from "./Checkout";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleCkearCart = () => {
        dispatch(clearCart());
       
    };

    return (
        <div>
        <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
        <button
          className="bg-green-100 p-2 m-5"
          onClick={() => handleCkearCart()}
        >
          Clear Cart
        </button>
      
            <Checkout/>
            
          
        <div className="flex flex-wrap">
          {cartItems.map((item) => (
            <FoodItem key={item.id} {...item} />
            
          ))}
          
        </div>
            
        <div>
            {cartItems.map((it)=>{
              <Checkout {...it}/>
            })}
        </div>
            

     
      </div>
    )
}

export default Cart;