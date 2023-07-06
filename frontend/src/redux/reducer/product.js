import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product:null,
  isLoading: true,
  success: false,
  error: null,
  message: null,
};
const productReducer = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {
    productCreateRequest: (state) => {
      state.isLoading = true;
    },
    productCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    },
    productCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    getAllProductRequest: (state) => {
      state.isLoading = true;
    },
    getAllProductSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    },
    getAllProductFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleargetAllProductError: (state) => {
      state.error = null;
    },
    deleteProductRequest: (state) => {
      state.isLoading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
    },
    deleteProductFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleardeleteProductError: (state) => {
      state.error = null;
    },
  },
});
export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  clearError,
  getAllProductRequest,
  getAllProductSuccess,
  getAllProductFail,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFail,
} = productReducer.actions;
export default productReducer.reducer;
