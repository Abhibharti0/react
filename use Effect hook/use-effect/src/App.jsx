import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //first ->side-effect funtion
  //second ->clean-up funtion
  //third ->comma separated dep list

   //variation:1
   //runs on every render
  // useEffect(()=>{
  //   alert("i will run on each render")
  // })

  ////variation 2:that runs on only first render
  useEffect(()=>{
    alert("I will run on only 1st render")},[]); //✅ empty dependency array

  function handlerClick(){
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={handlerClick}>Click me</button>
      <br />
      Count is {count}
    </div>
  )
}

export default App
