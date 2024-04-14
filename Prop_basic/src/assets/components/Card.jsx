import React from 'react'

export default function Card({image ,name,proffesion}) {
  return (
    <div>

        <div className="main w-40 bg-white rounded-md overflow-hidden">
            <div className="w-full h-30 bg-sky-200">
              <img src={image} alt="" />
            </div>
            <div className="w-full p-3">
              <h3>{name}</h3>
              <h5>{proffesion}</h5>
              <button onClick={()=>alert("Showing alert")} className='px-3 py-1 text-xs text-white bg-blue-600  font-semibold'>Know More</button>
            </div>

        </div>
       
    </div>
  )
}
