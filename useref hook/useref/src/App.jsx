import { useState, useRef } from "react";
import "./App.css";

function App() {
   const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    // directly start interval (no condition check)
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current=null
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    setTime(0);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏱️ Stopwatch using useRef</h2>
      <h1>{time}s</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
