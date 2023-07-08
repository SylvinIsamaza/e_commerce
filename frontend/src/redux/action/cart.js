import { addToCart, removeToCart } from "../reducer/cart"

export const addProductToCart=(data)=>async(dispatch,getState)=>{
  
  dispatch(addToCart(data))
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cart))
  return data
}
export const removeProductToCart=(data)=>async(dispatch,getState)=>{
  dispatch(removeToCart(data))
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cart))
  return data;
}
