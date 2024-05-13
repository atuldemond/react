import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata, getdeledata } from "../store/reducer/calculatorReducer";

const Calculator = () => {
  const getcal = useSelector((state) => state.getcal);
  console.log(getcal);

  const dispatch = useDispatch();

  return (
    <div className="   w-[80vw] h-full bg-red-100 m-auto flex flex-col justify-center items-center  px-[3vw] py-[vh] ">
      <h1 className="text-center text-5xl">Calculator</h1>
      <div className=" text-white bg-black scale-90 calculator rounded-lg flex flex-col  items-center w-[30vw] h-auto py-[3vh] border-2 border-black">
        <form className=" flex justify-center">
          <input
            className="w-[28vw] text-black h-[10vh] mb-[3vh] "
            type="text"
          />
        </form>
        <div className="keypad w-[28vw] h-[60vh] flex gap-5 justify-center items-center flex-wrap border-black border-2 ">
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="7"
            onClick={() => dispatch(getdata())}
          >
            7
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="8"
            // onClick={handleclick}
          >
            8
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
            text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="9"
            // onClick={handleclick}
          >
            9
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
             text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="+"
            // onClick={handleclick}
          >
            +
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="4"
            // onClick={handleclick}
          >
            4
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="5"
            // onClick={handleclick}
          >
            5
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
             text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="6"
            // onClick={handleclick}
          >
            6
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="*"
            // onClick={handleclick}
          >
            *
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
          hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
           text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="3"
            // onClick={handleclick}
          >
            3
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
            text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="2"
            // onClick={handleclick}
          >
            2
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
             hover:scale-110 hover:ease-out duration-75 rounded-lg bg-slate-700
              text-4xl font-extrabold  h-[10vh] border-2 border-black"
            name="1"
            // onClick={handleclick}
          >
            1
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="-"
            // onClick={handleclick}
          >
            -
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="ac"
            // onClick={handleclick}
          >
            Ac
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
            hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
             text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="0"
            // onClick={handleclick}
          >
            0
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
           hover:scale-110 hover:ease-out duration-75 rounded-lg bg-sky-400
            text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="."
            // onClick={handleclick}
          >
            .
          </button>
          <button
            className="w-[5vw] flex justify-center items-center
          hover:scale-110 hover:ease-out duration-75 rounded-lg bg-green-400
           text-4xl font-extrabold text-black h-[10vh] border-2 border-black"
            name="="
            // onClick={handleclick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
