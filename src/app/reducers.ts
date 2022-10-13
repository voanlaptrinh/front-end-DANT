import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

export const rootReducers = combineReducers({
   auth: authSlice
})