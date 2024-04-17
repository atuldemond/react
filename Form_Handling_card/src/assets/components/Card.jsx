import React from 'react'

export default function Card({user,handleremove}) {
  return (
    <>
    {user.map((item,index)=>(
      
      <div className="cards w-52 h-72 gap-2 bg-white  rounded-md flex justify-center items-center flex-col" >
      <span >
      <img className="w-20 h-20  rounded-full  object-fill" src={item.image} alt="" />
     </span>
     <h1 className='font-extrabold text-2xl'>{item.name}</h1>
    <p className='text-center text-xs'>{item.email}</p>
    <p className='text-center font-bold leading-tight '>hello my name is , this is casual text for reading  welcome to react </p>
  <button  onClick={()=>handleremove(index)} className='bg-red-600 text-white font-bold m-2 px-4 py-1 rounded-md'>Remove it</button>

 </div>

    ))}
     

          


         
       
    </>
  )
}
