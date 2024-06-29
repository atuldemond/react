import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Ensure you import your CSS
import App from "./App";
import { CalculatorProvider } from "./CalculatorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>
);
