import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    user: null,
    isAuthenticated:false,
    error: null
}
const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        loadUserStart:(state) => {
            state.loading = true
        },
        loadUserSuccess:(state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload
        },
        loadUserFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        logout:(state)=>{
            state.user=null;
        },
        clearError:(state)=>{
            state.error=null
        }
    }
})


export const{loadUserStart,loadUserFailure,loadUserSuccess}=userSlice.actions
export default userSlice.reducer
