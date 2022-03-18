import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './rootSaga';
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// keep the status of the app
export const persistor = persistStore(store);

export default {
    store,
    persistor
}