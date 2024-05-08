import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const { value } = useSelector((state) => state.Counter);
  console.log(value);
  return (
    <div>
      <div className="w-[80vw] bg-white h-[100vh] m-auto ">
        <div className="slash text-3xl py-4 px-4">Counter</div>
      </div>
    </div>
  );
};

export default Counter;
