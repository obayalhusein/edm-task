import { apiService } from "../../services/api";
import { Dispatch } from "redux";
import * as CONSTANTS from "./constants";

const loadingAction = () => ({
  type: CONSTANTS.PRODUCT_LOADING,
});

const errorAction = error => ({
  type: CONSTANTS.PRODUCT_ERROR,
  payload: error,
});

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(loadingAction());

  try {
    const products = await apiService.get("/products");
    console.log({ products });
    dispatch({
      type: CONSTANTS.FETCH_PRODUCT_SUCCESS,
      payload: products?.data.data,
    });
  } catch (error) {
    dispatch(errorAction(error));
  }
};
