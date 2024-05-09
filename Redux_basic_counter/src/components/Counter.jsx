import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/reducers/counterSlice";
import { decrement } from "../store/reducers/counterSlice";
import { incrementByAmount } from "../store/reducers/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-[80vw] bg-white h-[100vh] m-auto ">
        <div className="slash text-3xl py-4 px-4">Counter</div>

        <div className=" couterapp  ">
          <h1 className="text-5xl bg-black text-white  text-center w-[100px] h-[100px] ml-[37vw] border-2 border-black flex justify-center items-center rounded-full ">
            {value}
          </h1>
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-100 ml-[25vw]   mt-[4vh] py-[1vh] px-[3vw] border-2 font-extrabold border-black hover:bg-red-300 hover:scale-90 duration-75 ease-in rounded-md "
          >
            Add
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-blue-100 ml-[3vw] py-[1vh] px-[3vw] border-2 font-extrabold border-black hover:bg-red-300 hover:scale-90 duration-75 ease-in rounded-md "
          >
            sub
          </button>
          <button
            onClick={() => dispatch(incrementByAmount())}
            className="bg-blue-100 ml-[3vw] py-[1vh] px-[3vw] border-2 font-extrabold border-black hover:bg-red-300 hover:scale-90 duration-75 ease-in rounded-md "
          >
            AddBy+5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
