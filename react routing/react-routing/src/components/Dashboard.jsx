import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
      
    </div>
  )
}

export default Dashboard
