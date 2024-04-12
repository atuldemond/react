import React from 'react'
import { useState } from 'react'

export default function Add() {

  const[ val, setVal] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    
    <div>
       {val.map((item)=><h1>{item}</h1>)}
       <button className='bg-green-600 py-2 px-5 rounded-lg'
       onClick={()=>setVal(([...val ,11]))}
       >Click Me</button>
      
    </div>
  )
}
