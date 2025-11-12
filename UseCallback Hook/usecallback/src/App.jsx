import { useState, useCallback } from 'react'
import ChildComponent from './components/ChildComponent'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  // useCallback ensures the function reference doesn't change on every render
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>
        <ChildComponent buttonName="Click Me" onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
