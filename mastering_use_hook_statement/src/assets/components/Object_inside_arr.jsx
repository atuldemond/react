import React, { useState } from 'react'

const Object_inside_arr = () => {

    const [val ,setVal] = useState([
        {name:"Atul",age:23},
        {name:"Rahul",age:22},
        {name:"Mohan",age:26},
        {name:"Kumar",age:27},

]);
  return (
    <div>
      {val.map((item)=>(
       <div>

        <h1>{item.name}</h1>
          <h1>{item.age}</h1>
       </div>
   
      ))}
      <button onClick={()=>setVal(()=>val.map( item=> item.name == "Atul" ?({name:"Atul Demond",age:23}) : item))}>Clike </button>
    </div>
  )
}

export default Object_inside_arr
