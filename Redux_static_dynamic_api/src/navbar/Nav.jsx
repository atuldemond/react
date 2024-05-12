import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Users from "../components/Users";
import Counter from "../components/Counter";

const Nav = () => {
  return (
    <div className="w-sreen h-screen">
      <div className="h-[10vh] w-[100vw] bg-red-200 flex justify-center gap-10 items-center font-semibold  ">
        <Link className="bg-white px-[1vw] py-[1vh]  text-2xl  " to="/">
          Home
        </Link>
        <Link className="bg-white px-[1vw] py-[1vh]  text-2xl " to="/counter">
          Counter
        </Link>
        <Link className="bg-white px-[1vw] py-[1vh]  text-2xl " to="/users">
          users
        </Link>
        <Link className="bg-white px-[1vw] py-[1vh] text-2xl " to="/products">
          Product
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Nav;
