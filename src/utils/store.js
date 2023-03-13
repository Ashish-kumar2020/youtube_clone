import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    // name of the store
    reducer:{
        cart: cartSlice,
    },
});

export default store;


