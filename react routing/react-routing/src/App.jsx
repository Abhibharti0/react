import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import Mock_tests from './components/Mock_tests';
import Reports from './components/Reports';
import Not_Found from './components/Not_Found';
const router =createBrowserRouter(
[
  {path:"/",
    element: <div> <Navbar /><Home /></div> 
  },
  {path:"/about",
    element: <div><Navbar /><About /></div> },
  {
    path:"/dashboard",
    element: <div><Navbar /><Dashboard/>
    
    </div>,
    children:[
      {
        path:'courses',
        element: <div><Courses /></div>
      },
      {
        path:'mock-tests',
        element: <div><Mock_tests /></div>
      },
      {
        path:'reports',
        element: <div><Reports /></div>
      }
    ] 
  },

  {
    path:"/params/:id",
    element: <div>
      <Navbar />
      <ParamComp/></div> 
  },
  {
    path:"*",
    element:<Not_Found />
  }
]
);

function App() {
  

  return (
   <div><RouterProvider router={router} /></div>
  )
}

export default App
