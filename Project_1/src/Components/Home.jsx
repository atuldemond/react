import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import { productContext } from '../Utils/Context'
import Loading from './Loading'


const Home = () => {

  const [products]= useContext(productContext)

  return  products ? (
   <>
    <Nav /> 
     
     <div className="h-full w-[85%] p-5 pt-[5%] flex flex-wrap gap-2  overflow-x-hidden overflow-y-auto ">
            
            {products.map((p,i)=>
          <Link key={p.id} to={`/details/${p.id}`} className=' card p-5 border shadow w-[18%] h-[30vh] flex justify-center items-center flex-col '>
          <div  
            className='hover:scale-110 duration-75 ease-out w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center'
            style={
            
            {backgroundImage:  
              
              `url(${p.image})` ,
    
            }}>
            
          </div>
          <h1 className='hover:text-blue-300 '>{p.title}</h1>
         </Link>


          )}


            
        
        
        
        
            </div>
   </>
  ) : (
    <Loading/>
  )
}

export default Home
