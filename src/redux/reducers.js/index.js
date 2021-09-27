import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

export const reducers = combineReducers({
  allProduct: productReducers,
});
