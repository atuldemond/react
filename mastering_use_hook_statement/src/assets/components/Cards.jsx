import React, { useState } from 'react'
import "./Cards.css"
const Cards = () => {

    const [value,SetValue]=useState({name:"Atul Demond", banned:true})


  return (
    <div className='main'>
      <h1 className="">{value.name}</h1>
      <h2>{value.banned.toString()}</h2>
      <h3>{value.age}</h3>
      <button 
     onClick={()=>SetValue({...value , banned:!value.banned , age:23})} 
     className={`text-red ${!value.banned ?"bg-red-800":"bg-green-800"}`}>Chnage Value</button>
    </div>
  )
}

export default Cards
