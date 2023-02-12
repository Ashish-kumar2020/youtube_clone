import { useState } from "react";

const CheckoutPrice = ({prices})=>{
    // console.log( prices.reduce((result,number)=> result+number));
    return (
    <>
       
        <h1>Total Price - {prices && ("₹"+(prices.reduce((result,number)=> result+number,0)/100))}</h1>
    
    </>

    )
}

export default CheckoutPrice;