import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyAmount,
} from "../store/reducers/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.value);

  const dispatch = useDispatch();
  // console.log("value getting counter.jsx state.value => " + value);
  return (
    <div className="w-[80vw] h-auto px-[5vw] py-[5vh] m-auto text-[2vw] text-white bg-red-400 text-left ">
      Counter
      <div className="count flex justify-center text-5xl font-semibold ">
        Counter : {value}
      </div>
      <div className="button flex justify-center gap-4 my-[3vh] ">
        <div
          onClick={() => dispatch(increment())}
          className="btn cursor-pointer bg-red-100 text-black px-[2vw] py-[1vh] font-semibold rounded-md "
        >
          Increment +1
        </div>
        <div
          onClick={() => dispatch(decrement())}
          className="btn cursor-pointer bg-red-100 text-black px-[2vw] py-[1vh] font-semibold rounded-md "
        >
          Decrement -1
        </div>
        <div
          onClick={() => dispatch(incrementbyAmount())}
          className="btn cursor-pointer bg-red-100 text-black px-[2vw] py-[1vh] font-semibold rounded-md "
        >
          Increment +5
        </div>
      </div>
    </div>
  );
};

export default Counter;
