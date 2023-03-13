import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    priceItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      state.priceItem = []
    },
    price: (state,action) =>{
      state.priceItem.push(action.payload)
    }
  },
});

export const { addItem, removeItem, clearCart,price } = cartSlice.actions;

export default cartSlice.reducer;

