import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // This is the old way of doing it:
  //reducer: counterSlice.reducer,

  // This is the new way of doing it:
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
export default store;
