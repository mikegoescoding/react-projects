import { useState } from "react";
import "./App.css";
// import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function subtract() {
    setCount(count - 1);
  }

  return (
    <>
      <h1
        id="center"
        className="counter"
        style={{ color: count < 0 ? "red" : "white" }}
      >
        {count}
      </h1>
      <button
        style={{ width: 100, height: 60 }}
        onClick={subtract}
      >
        minus
      </button>
      <button
        style={{ width: 100, height: 60 }}
        onClick={add}
      >
        plus
      </button>
    </>
  );
}

export default App;
