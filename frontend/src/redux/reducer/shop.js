import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: null,
  isSeller: false,
  error: false,
  isLoading: true,
  
};
const shopSlice = createSlice({
  name: "sellerReducer",
  initialState,
  reducers: {
    loadSellerStart: (state) => {
      state.isLoading = true;
    },
    loadSellerSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.seller = action.payload;
      state.isSeller = true;
    },
    loadSellerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loadShopSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.seller = action.payload;
      state.isSeller =false;
    },
    sellerLogout: (state) => {
      state.seller = null;
    },
    clearSellerError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loadSellerStart,
  loadSellerSuccess,
  loadSellerFailure,
  sellerLogout,
  clearSellerError,
} = shopSlice.actions;
export default shopSlice.reducer;
