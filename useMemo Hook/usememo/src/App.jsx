import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 10000000; i++) {} // fixed semicolon
    return num * 2;
  }

  // Use useMemo to avoid recalculating unnecessarily
  const doubleValue = useMemo(() => expensiveTask(input), [input]); // only runs once

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>
      <input type="number" placeholder='enter number' value={input}
      onChange={(e)=>setInput(e.target.value)} />
      <div>Double: {doubleValue}</div>
    </div>
  );
}

export default App;
