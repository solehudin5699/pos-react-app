import { combineReducers } from "redux";
import productsReducer from "./products";
import requestProductsReducer from "./requestProducts";

//Combine reducers
const indexReducer=combineReducers({
  products:productsReducer,
  requestAPIProducts:requestProductsReducer
})

export default indexReducer;