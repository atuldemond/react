import React from 'react'
import "./Card.css"


const Card = () => {

  const data = [
      {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"AMAZON",
      description:"Hello How are you today and how are youdoing",
      instock:true},
      

      {image:'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Flipkart",
      description:"hello how are you today and how are youdoing ",
      instock:false},
      
      {image:'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Apple",
      description:"hello how are you today and how are you today",
      instock:true}

  ]
  return (
    <div className='main '>

        {data.map((elmm,index)=>( 
            <div key={index} className="box">
            <div className="image">
               <img className=' ' src={elmm.image} alt="" />
            </div>
            <div className="sec">
           
              <h2 className='text' >{elmm.name}</h2>
              <p className='des'>{elmm.description}</p>
              <button className={`btn ${elmm.instock ?"bg-green-700 ": "bg-red-700"}` }>
                {elmm.instock ?"In stock" :"out of stock" }
                </button>
            </div>
          </div>))}

    </div>
    
    
  )
}

export default Card
