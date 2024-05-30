import { configureStore } from "@reduxjs/toolkit";
import { api } from "../query";
import counterReducer from "../store/counterSlice";
import serviceReducer from "./serviceSlice";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
    service: serviceReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export default configureStore({
    reducer: persistedReducer,
});
