import React, { useContext } from "react";
import "./App.css";
import Display from "./Display";
import Button from "./Button";
import { CalculatorProvider, CalculatorContext } from "./CalculatorContext";

function App() {
  const { input, handleInput, clearInput, evaluateExpression } =
    useContext(CalculatorContext);

  return (
    <CalculatorProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-10">
        <div className="calculator w-full max-w-md shadow-lg rounded-lg overflow-hidden">
          <Display value={input} />
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-200 rounded-b-lg">
            {[...Array(9).keys()].map((num) => (
              <Button
                key={num}
                onClick={() => handleInput(num + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
              >
                {num + 1}
              </Button>
            ))}
            <Button
              onClick={() => handleInput("+")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold"
            >
              +
            </Button>
            <Button
              onClick={() => handleInput("-")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold"
            >
              -
            </Button>
            <Button
              onClick={() => handleInput("*")}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold"
            >
              *
            </Button>
            <Button
              onClick={() => handleInput("/")}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold"
            >
              /
            </Button>
            <Button
              onClick={clearInput}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold"
            >
              C
            </Button>
            <Button
              onClick={evaluateExpression}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold"
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
