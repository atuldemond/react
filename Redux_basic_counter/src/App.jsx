import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routing from "./utils/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[screen] h-[screen] bg-red-100">
      <Routing />
    </div>
  );
}

export default App;
