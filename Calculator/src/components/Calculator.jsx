import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  seven,
  getdeletedata,
  getadding,
} from "../store/reducer/calculatorReducer";

const Calculator = () => {
  const { value } = useSelector((state) => state.calculatorReducer);
  console.log(value);

  const dispatch = useDispatch();

  return (
    <div className="   w-[80vw] h-full bg-red-100 m-auto flex flex-col justify-center items-center  px-[3vw] py-[vh] ">
      <h1 className="text-center text-5xl">Calculator</h1>
      <div className=" text-white bg-black scale-90 calculator rounded-lg flex flex-col  items-center w-[30vw] h-auto py-[3vh] border-2 border-black">
        <form className=" flex justify-center">
          <input
            className="w-[28vw] font-semibold text-3xl text-right  text-black h-[10vh] mb-[3vh] "
            type="text"
            value={value}
          />
        </form>
        <div className="keypad w-[28vw] h-[60vh] flex gap-5 justify-center items-center flex-wrap border-black border-2 ">
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="7"
            onClick={() => dispatch(seven(7))}
          >
            7
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="8"
            onClick={() => dispatch(seven(8))}
          >
            8
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
            text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="9"
            onClick={() => dispatch(seven(9))}
          >
            9
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
             text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="+"
            onClick={() => dispatch(seven("+"))}
          >
            +
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="4"
            onClick={() => dispatch(seven(4))}
          >
            4
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="5"
            onClick={() => dispatch(seven(5))}
          >
            5
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="6"
            onClick={() => dispatch(seven(6))}
          >
            6
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="*"
            onClick={() => dispatch(seven("*"))}
          >
            *
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
          hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
           text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="3"
            onClick={() => dispatch(seven(3))}
          >
            3
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
            text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="2"
            onClick={() => dispatch(seven(2))}
          >
            2
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="1"
            onClick={() => dispatch(seven(1))}
          >
            1
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="-"
            onClick={() => dispatch(seven("-"))}
          >
            -
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="ac"
            onClick={() => dispatch(seven("0"))}
          >
            Ac
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
             text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="0"
            onClick={() => dispatch(seven(0))}
          >
            0
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="."
            onClick={() => dispatch(seven("."))}
          >
            .
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
          hover:scale-110 hover:ease-out duration-75 rounded-lg bg-green-400
           text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="="
            onClick={() => dispatch(seven("="))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
