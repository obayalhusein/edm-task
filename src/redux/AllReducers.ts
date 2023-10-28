import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import productReducer from "./products/reducer";

const AllReducers = combineReducers({
  authReducer,
  productReducer,
});

export default AllReducers;
