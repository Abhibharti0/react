import { createContext,useState } from 'react'

import './App.css'
import ChildA from './components/ChildA';

//step 1:create context
const UserContext=createContext();

//step 2:wrap all the child inside a provider
//step 3:pass value
//step 4:consumer k ander jaake consume karlo



function App() {
  const [user,setUser]=useState({name:"Abhishek"})

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <ChildA />
   </UserContext.Provider>
  )
}

export default App
export {UserContext}
