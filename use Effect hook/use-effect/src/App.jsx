import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  //first ->side-effect funtion
  //second ->clean-up funtion
  //third ->comma separated dep list

  

   //variation:1
   //runs on every render
  // useEffect(()=>{
  //   alert("i will run on each render")
  // })




  ////variation 2:that runs on only first render
  // useEffect(()=>{
  //   alert("I will run on only 1st render")},[]); //✅ empty dependency array



  //variation 3:Variation 3: Runs only when specific value(s) change
  // useEffect(() => {
  // alert("I will run only when count changes");
  // }, [count]); // ✅ dependency array me variable diya



  //variation 4:Runs  when any value(s) change -multiple dependency
  useEffect(()=>{alert("I will run every time when count/total is update")},[count,total])


  function handlerClick(){
    setCount(count+1);
  }
  function handlerClickTotal(){
    setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handlerClick}>Click me</button>
      <br />
      Count is {count}
        <br />
      <button onClick={handlerClickTotal}>Click me</button>
      <br />
      Count is {total}
    </div>
  )
}

export default App
