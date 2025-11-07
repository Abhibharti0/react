import React from 'react'
import { Link ,useNavigate} from "react-router-dom";


const About = () => {
  const navigate=useNavigate();
  function handlerClick(){
    navigate ('/dashboard')}
  return (
    <div>
      <h1>About page
        <button onClick={handlerClick}>Move to dashboard page</button>
      </h1>
    </div>
  )
}

export default About;
