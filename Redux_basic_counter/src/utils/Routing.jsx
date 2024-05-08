import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Data from "../components/Data";
import About from "../components/About";
import Counter from "../components/Counter";

const Routing = () => {
  return (
    <div>
      <div className="nav  gap-12 m-auto flex justify-center items-center w-[full] h-[10vh] bg-red-300 ">
        <Link
          className=" bg-green-200 px-5 py-2 border-[1px] border-black font-semibold hover:scale-110 duration-75 ease-out hover:rounded-md hover:bg-yellow-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" bg-green-200 px-5 py-2 border-[1px] border-black font-semibold hover:scale-110 duration-75 ease-out hover:rounded-md hover:bg-yellow-200"
          to="/counter"
        >
          Counter
        </Link>
        <Link
          className=" bg-green-200 px-5 py-2 border-[1px] border-black font-semibold hover:scale-110 duration-75 ease-out hover:rounded-md hover:bg-yellow-200"
          to="/data"
        >
          Data
        </Link>
        <Link
          className=" bg-green-200 px-5 py-2 border-[1px] border-black font-semibold hover:scale-110 duration-75 ease-out hover:rounded-md hover:bg-yellow-200"
          to="/about"
        >
          About
        </Link>
      </div>
      <div className="routing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/data" element={<Data />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Routing;
