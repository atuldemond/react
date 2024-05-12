import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //Action
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementbyAmount: (state, action) => {
      // console.log("calling action " + action);
      state.value += 5;
    },
  },
});

export const { increment, decrement, incrementbyAmount } = counterSlice.actions;

export default counterSlice.reducer;
