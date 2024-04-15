import React, { useRef } from 'react'

export default function Card() {

  const name= useRef(null);
  const age= useRef(null);

  const stopdefault= (event)=>{ 
    event.preventDefault();
    console.log(name.current.value, age.current.value)
         
  }
  
  return (
    <div>
        
        <form action="" onSubmit={stopdefault}>


        <input ref={name} placeholder='name' type="text" />
        <input ref={age} placeholder='age' type="text" />
       
        <input type="submit" />


        </form>
     
    </div>
  )
}
