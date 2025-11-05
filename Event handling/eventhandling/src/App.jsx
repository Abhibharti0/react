import { useState } from 'react'

import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked")
  }
  function handleMouseOver(){
    alert("Para k uper mouse gya hai n")
  }

  return (
    <div><p onMouseOver={handleMouseOver}>i am para</p>
    
    <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default App
