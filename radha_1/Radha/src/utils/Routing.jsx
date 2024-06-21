import React from "react";
import { Link, Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
  );
};

export default Routing;
