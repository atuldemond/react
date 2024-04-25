import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'
import { Link } from 'react-router-dom';



const Nav = () => {

  const [products]= useContext(productContext)

  let ds_category = products && products.reduce((acc,cv)=>[...acc, cv.category],[]);
  
   ds_category= [...new Set(ds_category)]
 
  // console.log(ds_category)

  const color = ()=>{

    return (
        `rgba(${(Math.random ()*225).toFixed()},${(

          Math.random ()*255
        ).toFixed()},${(Math.random ()*255).toFixed()},0.4)`

    )
  }
   

 
   
  return (
    <>
      
    

    <nav className='w-[15%] h-full bg-zinc-100 pt-5  '>

    <a href="/Create" className=' px-8  py-3  m-4  mt-0  inline-block  rounded-lg  border-4 border-green-300 text-black  '>


    Add New Product

    </a>

  <hr />
  <h1 className='ml-10 mb-3 mt-8  font-bold  '>Category Filter</h1>

  <div className=' w-[100%]    '>
    
    {ds_category.map((c,i)=>(
        <Link  key={i} to={`/?category=${c}`} className=' mb-2   flex  items-center '>
        <span  style={{backgroundColor:color()}}  className=' rounded-full mr-2 ml-2 bg-blue-200 w-[15px] h-[15px] '></span>
         {c}
        </Link> 

    ))}
    


   
    
   



  </div>


</nav>



      
    </>
  
  )
}

export default Nav
