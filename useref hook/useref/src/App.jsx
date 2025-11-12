import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0); // useRef declared properly

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("value of val:", val.current);
    setCount(count + 1);
  }

  // Runs on every render (since no dependency array)
  useEffect(() => {
    console.log("Main fir se render ho gaya hu");
  });

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
