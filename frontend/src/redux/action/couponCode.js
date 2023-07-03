import axios from "axios";
import {
  deleteCouponCodeFail,
  deleteCouponCodeRequest,
  deleteCouponCodeSuccess,
  getAllCouponCodeFail,
  getAllCouponCodeRequest,
  getAllCouponCodeSuccess,
  couponCodeCreateFail,
  couponCodeCreateRequest,
  couponCodeCreateSuccess,
} from "../reducer/couponCode";
import { server } from "../../server";

export const getAllCouponCodes = (id) => async (dispatch) => {
  try {
    dispatch(getAllCouponCodeRequest());
    const { data } = await axios.get(
      `${server}/api/v2/couponCode/all-couponCodes/${id}`
    );
    console.log("hey" + data.couponCodes);

    if (data) {
      dispatch(getAllCouponCodeSuccess(data.couponCodes));
    } else {
      dispatch(getAllCouponCodeFail("no couponCodes found"));
    }
  } catch (error) {
    dispatch(getAllCouponCodeFail(error.message));
  }
};

export const deleteCouponCode = (id) => async (dispatch) => {
  try {
    dispatch(deleteCouponCodeRequest());
    await axios
      .delete(`${server}/api/v2/couponCode/${id}`, { withCredentials: true })
      .then((response) => {
        dispatch(deleteCouponCodeSuccess(response.data.message));
        console.log(response.data.message);
      })
      .catch((error) => dispatch(deleteCouponCodeFail(error)));
  } catch (error) {}
};
