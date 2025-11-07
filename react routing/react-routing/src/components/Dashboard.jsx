import React from 'react'
import { Link ,useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate=useNavigate();
    function handlerClick(){
      navigate ('/')}
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handlerClick}>Move to Home page</button>
    </div>
  )
}

export default Dashboard
