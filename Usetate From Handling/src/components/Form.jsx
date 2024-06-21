import React, { useState } from "react";

const Form = () => {
  const [value, SetValue] = useState({ name: "", email: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={(event) => SetValue({ ...value, name: event.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => SetValue({ ...value, age: event.target.value })}
          type="text"
          placeholder="age"
        />

        <input
          onChange={(event) =>
            SetValue({ ...value, email: event.target.value })
          }
          name="email"
          placeholder="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
