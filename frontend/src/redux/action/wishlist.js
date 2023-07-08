import { addWishlist, removeFromWishlist } from "../reducer/wishlist"

export const addProductToWishlist=(data)=>(dispatch,getState)=>{
dispatch(addWishlist(data))
localStorage.setItem('wishlist',JSON.stringify(getState().wishlist.wishlist))
return data
}
export const removeProductToWishlist=(data)=>(dispatch,getState)=>{
  dispatch(removeFromWishlist(data))
  localStorage.setItem('wishlist',JSON.stringify(getState().wishlist.wishlist))
  return data
  }