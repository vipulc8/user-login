import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlicer";
import userReducer from "./feature/userSlicer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "persist-key",
  storage: localStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const persister = persistStore(store);
