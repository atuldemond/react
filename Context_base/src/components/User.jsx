import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserConetxt } from '../context/Context'

function User() {
    const {user, SetUser} =  useContext(UserConetxt)
   
  return (
    <div>
     
        <h1 className='text-3xl font-bold m-10  '>User List</h1>
        <div className=" w-1/3 p-4 m-10 flex flex-col">
            {user.map(value =>(

                    <Link key={value.id} className='rounded-lg  bg-red-400 p-5 mb-10 font-semibold text-2xl' to={`/user/${value.id}`}>{value.name}</Link>
            ) )}
           
        </div>
     
    </div>
  )
}

export default User
