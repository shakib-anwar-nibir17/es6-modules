import "./App.css";
import Watch from "./components/Watch/Watch";
import { useState, useEffect } from "react";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple Watch", price: 200 },
  //   { id: 2, name: "Nova Watch", price: 400 },
  //   { id: 1, name: "OY Watch", price: 100 },
  // ];

  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watches.model} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
