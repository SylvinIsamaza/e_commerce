import {createSlice} from '@reduxjs/toolkit'



const initialState={
    seller:null,
    isSeller:false,
    error:false,
    isLoading:false
}
const shopSlice=createSlice({
    name:"sellerReducer",
    initialState,
    reducers:{
        loadSellerStart:(state) => {
            state.isLoading = true
        },
        loadSellerSuccess:(state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.seller = action.payload
            state.isSeller=true
        },
        loadSellerFailure:(state,action)=>{
            state.isLoadingoading=false;
            state.error=action.payload
        },
        sellerLogout:(state)=>{
            state.seller=null;
        },
        clearSellerError:(state)=>{
            state.error=null
        }
    }
})

export const{loadSellerStart,loadSellerSuccess,loadSellerFailure,sellerLogout,clearSellerError}=shopSlice.actions
export default shopSlice.reducer
