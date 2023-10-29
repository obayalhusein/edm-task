import { ProductAttributes } from "../../types/ProductTypes";
import * as CONSTANTS from "./constants";

const initState = {
  loading: false,
  error: null,
  products: [],
};

type ProductAction = {
  type: string;
  payload?: unknown;
};

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
          data: [...state.products?.data, action.payload],
        },
      };
    default:
      return state;
  }
}

export default productReducer;
