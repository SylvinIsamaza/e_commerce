import axios from "axios";
import {server} from "../../server";

export const loadUser =()=> async (dispatch) => {
    try {
        dispatch({type: "loadUserStart"})
        const data = await axios.get(`${server}/api/v2/user/get_user`,{withCredentials:true}).then((data) => {
            dispatch({type: "loadUserSuccess", payload: data.data})
        }).catch(err => {
            dispatch({type: "loadUserFailure", payload: err.data.message})
        })
    } catch (error) {
        dispatch({type: "loadUserFailure", payload: error.message})
    }
}
