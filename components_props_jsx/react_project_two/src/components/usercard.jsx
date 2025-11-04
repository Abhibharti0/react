import React from 'react'

import './usercard.css';
import img from '../assets/img.png'

const usercard = () => {
  return (
    <div className='user_container'>
      <p id='username'>Abhishek Bharti</p>
      <img id='user_img' src={img} alt="abhi" />
      <p id='userdesc'>Description of Abhishek Bharti</p>
    </div>
  )
}

export default usercard
