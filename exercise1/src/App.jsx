import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import Userdetail from "./Userdetail";

const App = () => {
  return (
    <>
      {/* <h1>I'm React Router</h1> */}
      {/* This is Tailwin css */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/detail/:id" element={<Userdetail />} />
      </Routes>
    </>
  );
};

export default App;
