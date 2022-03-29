import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local

import productsReducer from "./Products/products.reducer";
import cartReducer from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
  productsData: productsReducer,
  cartData: cartReducer
});

const configStorage = {
  key: "root",
  storage,
  white:['cartData']

};

export default persistReducer(configStorage, rootReducer);
