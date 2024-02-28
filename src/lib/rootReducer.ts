import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../lib/features/auth/authSlice"
const rootReducer = combineReducers({
    auth: authReducer,
})
export default rootReducer;