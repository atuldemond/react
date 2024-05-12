import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //Actions
    getproducts: (state, action) => {
      //   console.log(state, action);
      state.products = action.payload;
    },
  },
});

export default productslice.reducer;

export const { getproducts } = productslice.actions;
