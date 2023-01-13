import React from "react";

import "./App.css";
import ColumnPage from "./pages/ColumnPage";
import Home from "./pages/Home";
import MyRecord from "./pages/MyRecord";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<MyRecord />} />
        <Route path="/column" element={<ColumnPage />} />
      </Routes>
    </div>
  );
}

export default App;
