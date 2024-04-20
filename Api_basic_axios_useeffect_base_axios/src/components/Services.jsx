import React, { useState } from 'react'
import { useEffect } from 'react'

function Services() {


  const [value1 , setvalue1] = useState("This is First Data => 1");
   const [value2 , setvalue2] = useState("This is Second Data => 2");

    useEffect(()=>{
        
        console.log("service component is created ")
        return()=>{
            console.log("service component deleted")
        }
    },[value2])

 



  return (
    <div className='w-1/2 m-auto mt-3  bg-black p-5 font-san rounded-md'>
      <h1 className='text-2xl font-extrabold text-white '>{value1}</h1>
      
      <button onClick={()=>setvalue1("Your First Data is changed Succesfully")}  className='bg-yellow-300 p-2 mt-3 font-bold' >Change Data</button>

      <h1 className='text-2xl mt-10 font-extrabold text-white '>{value2}</h1>
      
      <button  onClick={()=>setvalue2("Your second Data is changed Succesfully")} className='bg-yellow-300 p-2 mt-3 font-bold' >Change Data </button>
    
    </div>
  )
}

export default Services
