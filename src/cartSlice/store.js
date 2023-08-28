// external import
import { configureStore } from "@reduxjs/toolkit";

// internal import
import cartReducer from "./cartSlice.js"
import productReducer from "./productSlice.js"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default store