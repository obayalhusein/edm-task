import { apiService } from "../../utils/api";
import { Dispatch } from "redux";
import * as CONSTANTS from "./constants";
import { ProductAttributes } from "../../types/productTypes";
const loadingAction = () => ({
  type: CONSTANTS.PRODUCT_LOADING,
});

const errorAction = (error: string | unknown) => ({
  type: CONSTANTS.PRODUCT_ERROR,
  payload: error,
});

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(loadingAction());

  try {
    const products = await apiService.get("/products");

    dispatch({
      type: CONSTANTS.FETCH_PRODUCT_SUCCESS,
      payload: products.data,
    });
  }
  catch (error) {
    dispatch(errorAction(error));
  }
};

export const addProduct = (productData: ProductAttributes) => async (dispatch: Dispatch) => {
  dispatch(loadingAction());
  try {
    const deleted: { data: ProductAttributes; } = await apiService.post("/products", { data: productData });

    dispatch({
      type: CONSTANTS.ADDED_PRODUCT,
      payload: deleted.data?.data,
    });
  }
  catch (error: string | unknown) {
    dispatch(errorAction(error));
  }
};

export const editProduct = (editedProduct: ProductAttributes) => async (dispatch: Dispatch) => {
  dispatch(loadingAction());
  try {
    const edited: { data: ProductAttributes; } = await apiService.put(`/products/${editedProduct.id}`, {
      data: editedProduct,
    });

    dispatch({
      type: CONSTANTS.EDIT_PRODUCT,
      payload: edited.data?.data,
    });
  }
  catch (error: string | unknown) {
    dispatch(errorAction(error));
  }
};

export const deleteProduct = (productId: number) => async (dispatch: Dispatch) => {
  dispatch(loadingAction());
  try {
    const deleted: { data: ProductAttributes; } = await apiService.delete(`/products/${productId}`);

    dispatch({
      type: CONSTANTS.DELETE_PRODUCT,
      payload: deleted.data?.data,
    });
  }
  catch (error: string | unknown) {
    dispatch(errorAction(error));
  }
};
