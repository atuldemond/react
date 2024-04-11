import React from 'react'

const Card = () => {

  const data = [
      {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"AMAZON", description:"Hello How are you today and how are youdoing"},
      {image:'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Flipkart", description:"hello how are you today and how are youdoing "},
      {image:'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Apple", description:"hello how are you today and how are"}

  ]
  return (
    <div className=' w-full flex justify-around  items-center  h-screen bg-blue-200'>

        {data.map((elmm,index)=>( 
            <div key={index} className="w-48  bg-zinc-200  rounded-md ">
            <div className="Name w-full h-32 bg-red-200">
               <img className=' object-fit  w-48 h-full' src={elmm.image} alt="" />
            </div>
            <div className="w-full   px-3 py-4">
           
              <h2 className='font-semibold' >{elmm.name}</h2>
              <p className='text-x5 mt-5'>{elmm.description}</p>
            </div>
          </div>))}

    </div>
    
    
  )
}

export default Card
