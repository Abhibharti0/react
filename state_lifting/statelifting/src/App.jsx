import React, { useState } from 'react';

import Card from './assets/components/Card';
import './App.css'

function App() {
  const[name,setname]=useState('');

  return (
    <div>
      <Card title="Card1" name={name} setname={setname}/>
      <Card title="Card2" name={name} setname={setname}/>
      <p> I am inside Parent Component and Value of name is {name}</p>
    </div>
  )
}

export default App
