import React from "react";
import { useContext, createContext } from "react";

const Mycontext = createContext("$ 100");

function App() {
  return <Fruit name="You have to pay" />;
}

function Fruit(props) {
  return <Bell gg={props.name} />;
}

function Bell(props) {
  const data = useContext(Mycontext);
  return (
    <h1>
      {props.gg}+{data}
    </h1>
  );
}

export default App;
