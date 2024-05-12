import axios from "axios";
import { getproducts } from "../reducers/productreducer";

export const asynproductapi = () => async (dispatch, getstate) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    //here we prodycr data us synchornus
    // console.log(response.data);
    dispatch(getproducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
