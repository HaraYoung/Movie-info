import React from "react";
import { Route, Routes } from "react-router-dom";

import Movie from "./pages/Movie.js";
import Detail from "./pages/DetailMovie.js";

function App() {
  return (
    <div style={{ backgroundColor: "gainsboro", minHeight: "100vh"}}>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
