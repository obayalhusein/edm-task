import { ProductAttributes } from "../../types/productTypes";
import * as CONSTANTS from "./constants";

const initState = {
  loading: false,
  error: null,
  products: { data: [] },
};

type ProductAction =
  | { type: typeof CONSTANTS.PRODUCT_LOADING }
  | { type: typeof CONSTANTS.PRODUCT_ERROR; payload: string }
  | { type: typeof CONSTANTS.FETCH_PRODUCT_SUCCESS; payload: ProductAttributes[] }
  | { type: typeof CONSTANTS.EDIT_PRODUCT; payload: { id: number; attributes: ProductAttributes } }
  | { type: typeof CONSTANTS.DELETE_PRODUCT; payload: { id: number } }
  | { type: typeof CONSTANTS.ADDED_PRODUCT; payload: ProductAttributes };

function productReducer(state = initState, action: ProductAction) {
  switch (action.type) {
    case CONSTANTS.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONSTANTS.PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONSTANTS.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case CONSTANTS.EDIT_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          data: state.products?.data?.map((item: ProductAttributes) => {
            if (item.id === action.payload.id)
              return {
                id: action.payload.id,
                attributes: action.payload.attributes,
              };
            return item;
          }),
        },
      };

    case CONSTANTS.DELETE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          data: state.products?.data?.filter(
            (item: ProductAttributes) => item.id !== action.payload.id
          ),
        },
      };

    case CONSTANTS.ADDED_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, action.payload],
        },
      };
    default:
      return state;
  }
}

export default productReducer;
