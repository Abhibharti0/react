import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'


function App() {
    const[count,setCount]=useState(0)

    function handlerClick(){
      setCount(count+1);
    }

  return (
    <div>
       <Button handlerClick={handlerClick} text="click me " ><h1>{count}</h1></Button>

    </div>
  )
}

export default App
