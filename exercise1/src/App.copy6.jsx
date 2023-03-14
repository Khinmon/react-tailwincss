import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import Userdetail from "./Userdetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/detail/:id" element={<Userdetail />} />
      </Routes>
    </>
  );
};

export default App;
