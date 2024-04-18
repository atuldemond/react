import React from 'react'
import{NavLink} from "react-router-dom"

function Nav() {
  return (
    <div>
        <nav className='mt-5 flex justify-center gap-5 text-2xl  '>
          
          <NavLink 
                    style={(e)=>{
                      return{
                        color:e.isActive ? 'red' : "",
                        fontWeight:e.isActive?"bold" :""
                      }
                    }}
          to="/">Home</NavLink>
          <NavLink 
            style={(e)=>{
                return{
                  color:e.isActive ? 'red' : "",
                  fontWeight:e.isActive?"bold" :""
                }
              }}
          
          to="/contact">Contact</NavLink>
          <NavLink
                style={(e)=>{
                    return{
                      color:e.isActive ? 'red' : "",
                      fontWeight:e.isActive?"bold" :""
                    }
                  }}
          
          
          to="/about">About</NavLink>
            
               
       
   </nav>
    </div>
  )
}

export default Nav
