import { useState } from 'react'
import ChildComponent from './components/ChildComponent'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>
        <ChildComponent buttonName="Click Me" />
      </div>
    </div>
  )
}

export default App
