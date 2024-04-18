import React from 'react'
import{Route,Routes} from "react-router-dom"
import Home from '../../Components/Home'
import Contact from '../../Components/Contact'
import About from '../../Components/About'


function Routing() {
  return (
    <div>
      
      <Routes >
               <Route path='/' element={<Home />}/>
               <Route path='/contact' element={<Contact />}/>
               <Route path='/about' element={<About />}/>
       </Routes>
    </div>
  )
}

export default Routing
