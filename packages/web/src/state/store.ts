import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const store: any = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };

export type AppDispatch = typeof store.dispatch;
