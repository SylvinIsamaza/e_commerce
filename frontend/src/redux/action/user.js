import axios from "axios";
import { server } from "../../server";
import {
  loadUserFailure,
  loadUserStart,
  loadUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../reducer/reducer";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserStart());
    const data = await axios
      .get(`${server}/api/v2/user/get_user`, { withCredentials: true })
      .then((data) => {
        dispatch(loadUserSuccess(data.data.user));
      })
      .catch((err) => {
        dispatch(loadUserFailure(err.message));
      });
  } catch (err) {
    dispatch(loadUserFailure(err.message));
  }
};

export const updateUser=(data)=>async(dispatch)=>{
  try {
    dispatch(updateUserStart())
    const {data}=await axios.put(`${server}/api/v2/user/update_user`,data,{withCredentials:true})
    dispatch(updateUserSuccess(data.user))
  } catch (error) {
   dispatch(updateUserFailure(error.message)) 
  }
}