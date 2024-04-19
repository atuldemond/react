import React from 'react'
import { useEffect } from 'react'

function Services() {

    useEffect(()=>{
        
        console.log("service component is created ")
        return()=>{
            console.log("service component deleted")
        }
    })
  return (
    <div className='w-1/2 m-auto mt-3  bg-black p-5 font-san rounded-md'>
      <h1 className='text-2xl font-extrabold text-white '>Service Component</h1>
      <p className='mt-2 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus omnis 
        corrupti exercitationem asperiores. Rem illo modi delectus illum expedita doloremque
         maxime doloribus
        iste quos magnam, sint facere! Molestias nihil possimus quam explicabo eius.
      </p>
      <button className='bg-yellow-300 p-2 mt-3 font-bold' >Explore More</button>
    
    </div>
  )
}

export default Services
