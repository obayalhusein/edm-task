import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const AllReducers = combineReducers({
  authReducer,
});

export default AllReducers;
