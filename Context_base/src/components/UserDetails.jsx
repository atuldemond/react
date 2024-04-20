import React, { useContext } from 'react'
import { UserConetxt } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
  const Navigate =  useNavigate()
   const {id} = useParams()
   const {user , SetUser} =  useContext(UserConetxt)
   console.log(user[id])
  return (
    <div className='flex  rounded-lg flex-col mt-5 p-5 w-1/2 m-auto bg-red-300'>
       <h1 className='text-3xl font-bold '>User Details</h1>
       <h3 className='mt-2 text-2xl  '>{user[id].name}</h3>
       <h3 className='mt-2 text-2xl  '>{user[id].city}</h3>

       <button className= ' px-4 py-2 mt-4 rounded-lg bg-black text-white font-extrabold w-1/3' onClick={()=>Navigate(-1)}>Go Back</button>
    </div>
  )
}

export default UserDetails
