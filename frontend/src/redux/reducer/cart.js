import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cart:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem('cartItems')):[]
}
const cartSlice=createSlice({
  initialState:initialState,
  name:'cart',
  reducers:{
    addToCart:(state,action)=>{
      const item=action.payload;
      const isItemsExist=state.cart.find((i)=>i._id===item._id)
      if(isItemsExist){
        return{
          ...state,
          cart:state.cart.map((i)=>i._id===isItemsExist._id?item:i)
        }
    }
    else{
      return{
        ...state,
        cart:[...state.cart,item]
      }
    }
    },
    removeToCart:(state,action)=>{
   const item=action.payload;
   return{
    ...state,
    cart:state.cart.filter((i)=>i._id!==item._id)
   }
    }
  }
})
export default cartSlice.reducer;
export const {addToCart,removeToCart} = cartSlice.actions