import { createSlice } from "@reduxjs/toolkit";

const initialState={
  wishlist:localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[]
}
const wishlistReducer=createSlice({

  initialState:initialState,
  name:"wishlist",
  reducers:{
    addWishlist:(state,action)=>{
      const item=action.payload;
      const itemExist=state.wishlist.find((i)=>i._id===item._id);
      if(itemExist){
       return {
        ...state.wishlist,
        wishlist:state.wishlist.map((i)=>i._id===itemExist._id?item:i)
       }

      }
      else{
        return {
          ...state,
          wishlist:[...state.wishlist,item]
        }
        
      }
    },
removeFromWishlist:(state,action)=>{
  return {
    ...state,
    wishlist:state.wishlist.filter((i)=>i._id!==action.payload._id)
    
  }
}
  }

})

export default wishlistReducer.reducer;
export const{
  addWishlist,
  removeFromWishlist
}=wishlistReducer.actions