import axios from "axios";
import { server } from "../../server";
import {
  loadUserFailure,
  loadUserStart,
  loadUserSuccess,
  updateAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
  updateAvatarFailure,
  updateAvatarStart,
  updateAvatarSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../reducer/reducer";
import { toast } from "react-toastify";

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

export const updateUser=(form)=>async(dispatch)=>{
  console.log('updating user')
  try {
    dispatch(updateUserStart())
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const {data}=await axios.put(`${server}/api/v2/user/update_user`,form,{withCredentials:true,config})
    dispatch(updateUserSuccess(data.user))
  } catch (error) {
   dispatch(updateUserFailure(error.message)) 
  }
}
export const updateAvatar=(form)=>async(dispatch)=>{
  try {
    dispatch(updateAvatarStart)
    const {data}=await axios.put(`${server}/api/v2/user/update_avatar`,form,{withCredentials:true})
    dispatch(updateAvatarSuccess(data.user))
  } catch (error) {
    dispatch(updateAvatarFailure(error.message))
  }
}
export const updateAddress=(form)=>async(dispatch)=>{
try {
  dispatch(updateAddressStart());
  await axios.put(`${server}/api/v2/user/update_address`,form,{withCredentials:true}).then((data)=>{
    console.log(data.data.user)
    dispatch(updateAddressSuccess(data.data.user))
    toast.success('address added successfullly')
  }).catch(err=>toast.error('something went wrong'))
  
  
} catch (error) {
  dispatch(updateAddressFailure(error))
  toast.error(error.message)
}
}