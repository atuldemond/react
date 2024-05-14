import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  value: ["2"],
};

export const calculatorSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    seven: (state, actions) => {
      state.value = concat(actions.payload);

      // state.value = concat(a);
    },

    getdeletedata: (state, actions) => {
      state.value = 0;
    },
    getadding: (state, actions) => {},
  },
});

export default calculatorSlice.reducer;

export const { seven, getdeletedata, getadding } = calculatorSlice.actions;
