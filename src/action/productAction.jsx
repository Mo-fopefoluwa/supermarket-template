import { useContext } from "react";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import myContext from "../context/myContext";

export const ListProducts = async (dispatch) => {
  const context = useContext(myContext);
  const { product } = context;
  const productData = [];

  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    product.forEach((products) => {
      productData.push(products);
    });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productData });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
