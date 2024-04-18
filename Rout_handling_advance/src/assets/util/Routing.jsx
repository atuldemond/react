 import React from 'react'
import{Route,Routes} from "react-router-dom"
import Home from '../../Components/Home'
import Contact from '../../Components/Contact'
import About from '../../Components/About'
import User from '../../Components/User'
import User_detail from '../../Components/User_detail'


function Routing() {
  return (
    <div>
      
      <Routes >
               <Route path='/' element={<Home />}/>
               <Route path='/contact' element={<Contact />}/>
               <Route path='/about' element={<About />}/>
               <Route path='/users' element={<User/>}>
               
                  <Route path='/users/:name' element={<User_detail/>}/>
                
                </Route>
        
       </Routes>
    </div>
  )
}

export default Routing
