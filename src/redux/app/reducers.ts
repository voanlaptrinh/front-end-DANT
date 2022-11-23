import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./../features/authSlice";

export const rootReducers = combineReducers({
   auth: authSlice
})