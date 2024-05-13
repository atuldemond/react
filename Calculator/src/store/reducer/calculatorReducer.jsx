import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [0],
};

export const calculatorSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getdata: (state, actions) => {
      state.value += 1;
      
      console.log(state.value);
    },

    getdeletedata: (state, actions) => {
      state.value = null;
      console.log(state.value);
    },
  },
});

export default calculatorSlice.reducer;

export const { getdata, getdeledata } = calculatorSlice.actions;
