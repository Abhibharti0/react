import React from 'react';
import './usercard.css';
import img from '../assets/img.png';

const UserCard = (props) => {
  return (
    <div className="user_container">
      <p id="username">{props.name}</p>
      <img id="user_img" src={props.image} alt={props.name} />
      <p id="userdesc">{props.desc}</p>
    </div>
  );
};

export default UserCard;
