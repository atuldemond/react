import React, { useState } from 'react'

export default function Control_Comp() {

  const [val, setval]= useState({name:"" , age:"" ,email:"", password:""})


  const stopdefault=(event)=>{
    event.preventDefault();
    console.log(val)

  }

  return (
    <div>
          <form action="" onSubmit={stopdefault}>
            <input onChange={(event)=>setval({name:event.target.value})} placeholder='name' type="text" />
            <input onChange={(event)=>setval({age:event.target.value})} placeholder='age' type="number" />
            <input onChange={(event)=>setval({email:event.target.value})} placeholder='email' type="email" />
            <input onChange={(event)=>setval({password:event.target.value})} placeholder='password' type="password" />
            <input type="submit" />
            </form>    
    </div>
  )
}
