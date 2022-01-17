import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./slices/app";
import newsReducer from "./slices/news";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"], // Add keys to persist
};

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
