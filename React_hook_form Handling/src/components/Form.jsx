import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("name")}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          name="email"
          type="text"
          placeholder="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
