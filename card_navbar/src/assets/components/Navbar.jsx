import React from 'react'

function Navbar({data}) {
  return (
    <div>
           <div className="main flex justify-between px-10 py-5">
            <div className="left text-white w-40 flex justify-center  rounded-md items-center font-extrabold bg-black ">Logo</div>
            <div className="right bg-black rounded-md text-white px-10 py-3 flex " >Favrouite
             <p className='px-2  text-black rounded-full bg-white mx-4 opacity-0.2 font-extrabold'>{data.filter(item=> item.added).length}</p>
            </div>
           </div>
    </div>
  )
}

export default Navbar
