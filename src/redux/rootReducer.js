import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local

import productsReducer from "./Products/products.reducer";

export const rootReducer = combineReducers({
  productsData: productsReducer,
});

const configStorage = {
  key: "root",
  storage,
};

export default persistReducer(configStorage, rootReducer);
