import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import userslice from "./reducers/userreducer";
import productslice from "./reducers/productreducer";

export const store = configureStore({
  reducer: {
    value: counterSlice,
    userdata: userslice,
    productdata: productslice,
  },
});
