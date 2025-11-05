import { useState } from 'react'

import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked")
  }
  function handleMouseOver(){
    alert("Para k uper mouse gya hai n")
  }
  function handlerinputchange(e){
    console.log("value till now:",e.target.value)
  }
  function handlersubmit(e){
    e.preventDefault()
    alert("do you want to submit the form")
  }
  

  return (
    <div>

      <form  onSubmit={handlersubmit}>
        <input type="text" onChange={handlerinputchange} />
        <button type='submit'>Submit</button>
      </form>
      
      {/* <p onMouseOver={handleMouseOver}>i am para</p>
    
    <button onClick={handleClick}>click me</button> */}
    </div>
  )
}

export default App
