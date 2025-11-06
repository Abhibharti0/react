import React, { useContext } from 'react'
// import { UserContext } from '../App'
 import {themeContext} from '../App'


const ChildC = () => {
  // const {user} =useContext(UserContext)
  const {theme,setTheme} =useContext(themeContext)
  function handlerClick(){
    if (theme ==='light')
      setTheme('dark')
    else setTheme('light')

  }
  return (
    <div>
     <button onClick={handlerClick}>
      Change theme</button>  
    </div>
  )
}

export default ChildC
