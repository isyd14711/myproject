import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";


export const cartStore = configureStore({
    reducer: cartSlice.reducer,

});