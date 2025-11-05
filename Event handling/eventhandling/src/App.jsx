import { useState } from 'react'

import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked")
  }

  return (
    <button onClick={handleClick}>click me</button>
  )
}

export default App
