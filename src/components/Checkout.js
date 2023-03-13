import React from 'react'
import { useSelector } from "react-redux";
import CheckoutPrice from './CheckoutPrice';




const Checkout = () => {
    // Accessing the stor
    const cartItems = useSelector((store)=>store.cart.priceItem);
   


     console.log(cartItems);
   
  
  return (
    <div>
       <CheckoutPrice prices = {cartItems}/>
    </div>

  )
}

export default Checkout;