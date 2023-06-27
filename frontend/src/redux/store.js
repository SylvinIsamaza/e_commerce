import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducer/reducer'
import sellerReducer from './reducer/shop'
export const store = configureStore({
    reducer: {
        user: userReducer,
        seller:sellerReducer
    }
})
