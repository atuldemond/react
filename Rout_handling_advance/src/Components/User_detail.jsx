import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function User_detail() {

   const {name} = useParams();
   const navigate = useNavigate();
   const goback = ()=>{
    
    // navigate("/users");
    navigate(-1)

   }
   
  return (
    <div className='w-1/2 m-auto mt-3  bg-black p-5 font-san rounded-md'>
    <h1 className='text-2xl  text-white '>User Detail</h1>
    <h1 className='text-white font-extrabold text-2xl mt-5 mb-5'>{name}</h1>
    <button  onClick={goback} className='bg-yellow-300 p-2 mt-3 font-bold' >Go Back</button>
  </div>
  )
}

export default User_detail
