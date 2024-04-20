import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'


import axios from 'axios'
import { Routes ,Route, Link} from 'react-router-dom'
import Show from './components/Show'
import Services from './components/Services'

function App() {


 

 

  return (
    <>  
         <nav className=' flex justify-center gap-10 '>
                <Link  className='bg-red-300 mt-1 px-5 py-3 rounded-lg font-bold hover:scale-90' to="/">Home</Link>
                <Link  className='bg-red-300 mt-1 px-5 py-3 rounded-lg font-bold hover:scale-90' to="/SHOW">Show</Link>
                <Link  className='bg-red-300 mt-1 px-5 py-3 rounded-lg font-bold hover:scale-90' to="/Services">Services</Link>


         </nav>



          <hr /><hr />
          <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/show' element={<Show/>}/> 
                 <Route path='/services' element={<Services/>}/> 

          </Routes>
        
   </>
  )
}

export default App
