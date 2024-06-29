import React from "react";

const Button = (props) => {
  const { onClick, children, className } = props;

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 m-1 rounded-md  text-3xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
