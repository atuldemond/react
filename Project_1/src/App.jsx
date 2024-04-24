import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import Details from './Components/Details'
//np work is done on 23/4/2024
function App() { 
  const [count, setCount] = useState(0)

  return (
    <div className=" h-screen w-screen flex">

    <Routes>
 
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<Details/>}/>
 
    </Routes>

    </div>
    
    

  );
  
  
      
 
};

export default App
