import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const evaluateExpression = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      console.error("Invalid expression");
    }
  };

  // Explicitly creating the value object passed to CalculatorContext.Provider
  const providerValue = {
    input,
    handleInput,
    clearInput,
    evaluateExpression,
  };

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
