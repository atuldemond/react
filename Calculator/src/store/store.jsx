import { configureStore } from "@reduxjs/toolkit";

import calculatorReducer from "./reducer/calculatorReducer";

export const store = configureStore({
  reducer: {
    getcal: calculatorReducer,
  },
});
