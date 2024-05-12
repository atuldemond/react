import { useState } from "react";
import "./css/App.css";
import Home from "./components/Home";
import Nav from "./navbar/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen">
        <Nav />
      </div>
    </>
  );
}

export default App;
