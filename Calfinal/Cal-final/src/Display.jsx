import React from "react";

const Display = (props) => {
  const { value } = props;

  return (
    <div className="calculator-display bg-black font-san font-extrabold text-2xl  text-white  text-right p-4 rounded-t-lg">
      {value}
    </div>
  );
};

export default Display;
