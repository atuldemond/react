import React from 'react'

export default function Card({image ,name,proffesion,frindchange,index,friends}) {
 
  // const {image ,name,proffesion, friends}= values

  return (
    <div>

        <div className="main w-40 mx-5 bg-white rounded-md overflow-hidden hover:scale-110 duration-500 ease-out ...">
            <div className="w-full h-30 bg-sky-200">
              <img src={image} alt="" />
            </div>
            <div className="w-full  p-3 flex flex-col justify-center items-center">
              <h3 className='text-lg font-semibold tracking-wide'>{name}</h3>
              <h5 >{proffesion}</h5>
              <button onClick={()=>frindchange(index)} className={`btn text-white  my-2  py-1 px-4 rounded ${friends === true ?"bg-green-700 ": "bg-red-700"}  hover:scale-110 duration-500 ease-out ...` }>
            {friends === true ? "Friends":"Add Friends"}</button>
            </div>

        </div>
       
    </div>
  )
}
