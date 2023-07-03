import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  couponCode: null,
  isLoading: true,
  success: false,
  error: null,
  message: null,
};
const couponCodeReducer = createSlice({
  name: "couponCodeReducer",
  initialState: initialState,
  reducers: {
    couponCodeCreateRequest: (state) => {
      state.isLoading = true;
    },
    couponCodeCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.couponCode = action.payload;
      state.success = true;
    },
    couponCodeCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    getAllCouponCodeRequest: (state) => {
      state.isLoading = true;
    },
    getAllCouponCodeSuccess: (state, action) => {
      state.isLoading = false;
      state.couponCode = action.payload;
      state.success = true;
    },
    getAllCouponCodeFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleargetAllCouponCodeError: (state) => {
      state.error = null;
    },
    deleteCouponCodeRequest: (state) => {
      state.isLoading = true;
    },
    deleteCouponCodeSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
    },
    deleteCouponCodeFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleardeleteCouponCodeError: (state) => {
      state.error = null;
    },
  },
});
export const {
  couponCodeCreateRequest,
  couponCodeCreateSuccess,
  couponCodeCreateFail,
  clearError,
  getAllCouponCodeRequest,
  getAllCouponCodeSuccess,
  getAllCouponCodeFail,
  deleteCouponCodeRequest,
  deleteCouponCodeSuccess,
  deleteCouponCodeFail,
} = couponCodeReducer.actions;
export default couponCodeReducer.reducer;
