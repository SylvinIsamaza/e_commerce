import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/reducer";
import sellerReducer from "./reducer/shop";
import productReducer from "./reducer/product";
export const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
  },
});
