import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "./utils/axios";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("/products")
      .then((user) => {
        console.log(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Home PAGE</h1>
    </>
  );
}

export default App;
