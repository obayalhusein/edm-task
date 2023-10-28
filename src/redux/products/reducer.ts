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
    default:
      return state;
  }
}

export default productReducer;
