import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  event: null,
  isLoading: true,
  success: false,
  error: null,
  message: null,
};
const eventReducer = createSlice({
  name: "eventReducer",
  initialState: initialState,
  reducers: {
    eventCreateRequest: (state) => {
      state.isLoading = true;
    },
    eventCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    },
    eventCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    getAllEventRequest: (state) => {
      state.isLoading = true;
    },
    getAllEventSuccess: (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    },
    getAllEventFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleargetAllEventError: (state) => {
      state.error = null;
    },
    deleteEventRequest: (state) => {
      state.isLoading = true;
    },
    deleteEventSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
    },
    deleteEventFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    cleardeleteEventError: (state) => {
      state.error = null;
    },
  },
});
export const {
  eventCreateRequest,
  eventCreateSuccess,
  eventCreateFail,
  clearError,
  getAllEventRequest,
  getAllEventSuccess,
  getAllEventFail,
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFail,
} = eventReducer.actions;
export default eventReducer.reducer;
