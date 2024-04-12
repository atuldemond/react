import React from 'react'
import { useState } from 'react'

const Usestate = () => {

     const [val,setval]  = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
   
  return (
    <div className='px-10'>
    
     {val.map(elm=><h1>{elm}</h1>)}
     <button className='bg-blue-600 rounded-md  px-4 py-1'
     onClick={()=>setval(()=>{
      return    val.filter((item,index)=>index!=val.length-1)
     })}>Click Me</button>
    </div> 
  )
}

export default Usestate
