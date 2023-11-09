// import { applyMiddleware, createStore  } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";
// import {onfetchdata} from './Saga'
// const sagamiddleware = createSagaMiddleware()
// const middleware = [sagamiddleware]
// middleware.push(logger)
// const store = createStore (rootReducer,applyMiddleware(...middleware))
// sagamiddleware.run(onfetchdata)
// export default store;

//-----redux toolkit------

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import  userSlice  from "./userSlice";
import authReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from "redux";
const persistConfig = { 
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  actor: userSlice,
  user: counterSlice,
  auth:(persistReducer(persistConfig, authReducer)),
})

const store = configureStore({
  reducer: rootReducer
})
// const store = configureStore({
//   reducer: {
//     user: counterSlice,
//     actor: userSlice,
//   },
// });
export let persistor = persistStore(store)
export default store;
