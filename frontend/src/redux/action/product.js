import axios from "axios";
import {
  deleteProductFail,
  deleteProductRequest,
  deleteProductSuccess,
  getAllProductFail,
  getAllProductRequest,
  getAllProductSuccess,
  productCreateFail,
  productCreateRequest,
  productCreateSuccess,
} from "../reducer/product";
import { server } from "../../server";

export const createProduct = (newForm) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch(productCreateRequest());
    const { data } = await axios.post(
      `${server}/api/v2/product/create-product`,
      newForm,
      config
    );
    if (data) {
      dispatch(productCreateSuccess(data.product));
    } else {
      dispatch(productCreateFail(data.error.message));
    }
  } catch (error) {
    dispatch(productCreateFail(error.message));
  }
};
export const getAllProducts = (id) => async (dispatch) => {
  try {
    dispatch(getAllProductRequest());
    const { data } = await axios.get(
      `${server}/api/v2/product/all-products/${id}`
    );
    console.log(data.products);

    if (data) {
      dispatch(getAllProductSuccess(data.products));
    } else {
      dispatch(getAllProductFail("no products found"));
    }
  } catch (error) {
    dispatch(getAllProductFail(error.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequest());
    await axios
      .delete(`${server}/api/v2/product/${id}`, { withCredentials: true })
      .then((response) => {
        dispatch(deleteProductSuccess(response.data.message));
        console.log(response.data.message);
      })
      .catch((error) => dispatch(deleteProductFail(error)));
  } catch (error) {}
};
