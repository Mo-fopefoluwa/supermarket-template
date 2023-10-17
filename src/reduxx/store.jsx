import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "../reducers/productReducer";
import {
  addItemToCartReducer,
  listCartItemsReducer,
} from "../reducers/cartReducers";
import cartSlice from "./cartSlice";

const reducer = combineReducers({
  //productsList: productListReducer,
  cart: cartSlice,
  // addToCart: addItemToCartReducer,
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export default store;
