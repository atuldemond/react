import React from 'react'

function Card({image,music,artist,added,click,index}) {
  return (
    <div>

              <div className="main1 h-full w-65  rounded-md bg-black">

              <div className="main w-65 h-full py-5 px-2  rounded-md items-center bg-black  flex justify-center">
             <div>
             <img  className="w-30 h-20  rounded-md" src={image} alt="" />

             </div>
             <div className="mx-4">
             <h2 className="font-sans text-white font-bold">{music}</h2>
             <h3 className="font-san  text-white">{artist}</h3>
             </div>
   
            </div>

            <div className="main2  flex rounded-md my-3 px-10 bg-black justify-center ">
            <button  onClick={()=>click(index)}  className={`'text-black font-bold rounded-sm px-3 my-3  py-1 ${added ?" bg-orange-600":"bg-white"} hover:scale-110 duration-500 ease-out ...`}>{added ?"Added":"Add to Favrouite"}</button>

            </div>


              </div>

            

    </div>
  )
}

export default Card
