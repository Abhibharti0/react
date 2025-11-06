import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <ul><li>
        <NavLink to="/" className={({isActive})=> isActive?"active-link":""}>HOME</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=> isActive?"active-link":""}>ABOUT</NavLink></li>
        <li><NavLink to="/Dashboard" className={({isActive})=> isActive?"active-link":""}>DASHBOARD</NavLink></li></ul>
    </div>
  )
}

export default Navbar
