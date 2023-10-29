import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AllReducers from "./AllReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

export const store = createStore(
  AllReducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
