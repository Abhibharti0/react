import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  function handlerClick(){
    navigate ('/about')
  }
  return (
    <div>
      <h1>Home Page
        <button onClick={handlerClick}>Move to about page</button>
      </h1>
    </div>
  );
};

export default Home;
