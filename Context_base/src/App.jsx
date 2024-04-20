import { useState } from 'react'

import { Link ,Route,Routes} from "react-router-dom"

import './App.css'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className='flex p-5 font-bold justify-center bg-yellow-200 gap-10 '>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
          
     </nav>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/user' element={<User/>}/>
               <Route path='/user/:id' element={<UserDetails/>}/>
           <Route/>
           <Route path='/about' element={<About/>}/>
     </Routes>
   
    </>
  )
}

export default App
