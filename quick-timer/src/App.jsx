import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (count === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [count]);

  function handleStart() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(10);
  }

  return (
    <div className="quick-rep">
      <h1>Timer:</h1>
      <Clock count={count} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Clock({ count }) {
  return (
    <div className="clockWrapper">
      <h1 className="clock">{count}</h1>
    </div>
  );
}
