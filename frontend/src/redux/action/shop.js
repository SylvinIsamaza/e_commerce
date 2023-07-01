import react from "react";
import { server } from "../../server";
import axios from "axios";
import {
  loadSellerFailure,
  loadSellerStart,
  loadSellerSuccess,
} from "../reducer/shop";

export const loadSeller = () => async (dispatch) => {
  try {
    dispatch(loadSellerStart());
    await axios
      .get(`${server}/api/v2/shop/get_seller`, { withCredentials: true })
      .then((response) => {
        dispatch(loadSellerSuccess(response.data.seller));
      })
      .catch((error) => {
        dispatch(loadSellerFailure(error.message));
      });
  } catch (error) {
    dispatch(loadSellerFailure(error.message));
  }
};
