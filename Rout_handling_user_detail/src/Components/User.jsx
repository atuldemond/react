import React from 'react'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div className='w-1/2 m-auto mt-3  bg-black p-5 font-san rounded-md'>
        <h1 className='text-2xl font-extrabold text-white '>Users</h1>
        <p className='mt-2 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus omnis 
          corrupti exercitationem asperiores. Rem illo modi delectus illum expedita doloremque
           maxime doloribus
          iste quos magnam, sint facere! Molestias nihil possimus quam explicabo eius.
        </p>
        <div className=" flex flex-col text-white">
         <Link className='p-3 bg-red-500 w-1/5  mb-3 mt-3 flex justify-center text-center font-extrabold '
                            
         
         to="/users/atul">Atul Demond</Link>
         <Link className='p-3 bg-red-500 w-1/5  mb-3 mt-3 flex justify-center text-center font-extrabold ' 
            

         
         to="/users/sumit">Sumit Demond</Link>
         <Link 
         className='p-3 bg-red-500 w-1/5  mb-3 mt-3 flex justify-center text-center font-extrabold '
         
         
         to="/users/rahul">Rahul Kumar</Link>
        
        </div>

        <button className='bg-yellow-300 p-2 mt-3 font-bold' >Explore More</button>
      </div>
      )
}

export default User
