import { useState } from 'react';
import Loginbtn from './components/Loginbtn';

import Logoutbtn from './components/Logoutbtn';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return(
    <div>
    {isLoggedIn ? <Logoutbtn /> :<Loginbtn />}
    </div>
  )

  // if (isLoggedIn) {
  //   return (<Logoutbtn />)
  // } else {
  //   return (<Loginbtn />)
  // }
}

export default App;
