import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice";
import serviceReducer from "./serviceSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    service: serviceReducer,
    user: userReducer,
  },
});
