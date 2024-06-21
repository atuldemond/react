import React, { useRef } from "react";

const Form = () => {
  const name = useRef(null);
  const age = useRef(null);
  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  };

  return (
    <div>
      <form action="" onSubmit={handlerSubmit}>
        <input ref={name} type="text" placeholder="name" /> <br />
        <input ref={age} type="text" placeholder="age" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
