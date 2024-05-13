import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Calculator from "../components/Calculator";

const Nav = () => {
  return (
    <div>
      <nav className=" w-full bg-yellow-300 h-[10vh] flex justify-center items-center gap-10 ">
        <Link
          className="border-black border-2  px-[2vw] py-[1vh] hover:bg-black hover:text-white 
          hover:scale-90 duration-75 ease-in hover:font-extrabold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border-black border-2  px-[2vw] py-[1vh] hover:bg-black hover:text-white 
          hover:scale-90 duration-75 ease-in hover:font-extrabold"
          to="/calculator"
        >
          Calculator
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};

export default Nav;
