import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Hello from "./Hello";
import Hi from "./Hi";
import User from "./User";
// const Hello = () => <h1>Hello</h1>;
// const Hi = () => <h1>Hi</h1>;
const Error = () => <h1>Error</h1>;

const App = () => {
  return (
    <>
      <h1>I'm react router DOM</h1>
      <Routes>
        {/* For User */}
        <Route path="user">
          <Route index element={<User />} />
          <Route path=":userId" element={<User />} />
          <Route path="hello" element={<Hello />} />
          <Route path="hi" element={<Hi />} />
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
