import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0); // useRef declared properly

  let btnRef=useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("value of val:", val.current);
    setCount(count + 1);
  }

  // Runs on every render (since no dependency array)
  useEffect(() => {
    console.log("Main fir se render ho gaya hu");
  });

  function changeColor(){
    btnRef.current.style.background="red"
  }

  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>Increment</button>

      <br />
      <br />
      <button onClick={changeColor}>Change Color of 1st Button</button>
      <br />
      <br />
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
