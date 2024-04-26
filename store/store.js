import { configureStore } from "@reduxjs/toolkit";
import { api } from "../query";
import counterReducer from "../store/counterSlice";
import serviceReducer from "./serviceSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        counter: counterReducer,
        service: serviceReducer,
        user: userReducer,
    },
});
