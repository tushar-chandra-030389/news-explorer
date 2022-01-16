import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./slices/app";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"], // Add keys to persist
};

const rootReducer = combineReducers({
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
