import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/reducer";
import sellerReducer from "./reducer/shop";
import productReducer from "./reducer/product";
import eventReducer from "./reducer/event";
import couponCodeReducer from "./reducer/couponCode";
import cartReducer from './reducer/cart'
import wishlistReducer from "./reducer/wishlist";

export const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    event: eventReducer,
    couponCode: couponCodeReducer,
    cart:cartReducer,
    wishlist:wishlistReducer
  },
});
