import { useState } from "react";
function App() {
  const [bobo, setBobo] = useState([
    { id: 1, name: "Mango", color: "green" },
    { id: 2, name: "Watermelon", color: "yellow" },
    { id: 3, name: "Apple", color: "red" },
  ]);
  console.log(bobo);
  return (
    <div>
      {bobo.map((arr) => {
        return (
          <h1 key={arr.id}>
            {arr.name} color:{arr.color}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
