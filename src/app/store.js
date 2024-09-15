import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";

export const store = configureStore({
  reducer: userReducer,
});
