
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
//np work is done on 23/4/2024
function App() {
  // const [count, setCount] = useState(0)

  const { search, pathname } = useLocation();
  return (
    <div className=" h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
