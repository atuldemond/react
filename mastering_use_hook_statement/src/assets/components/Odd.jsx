import React, { useState } from 'react'

export default function Odd() {
    const [val , setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (

    <div className='mx-10'>
        {val.map((item)=><h1>{item}</h1>)}
        <button
        
        onClick={()=>setVal(()=>{
            return val.filter((item,index)=>item%2 !== 0)
        })}
        className='bg-green-500 rounded-md '>Clik me</button>
    </div>
  )
}
