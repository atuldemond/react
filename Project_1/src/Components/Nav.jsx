import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'



const Nav = () => {

  const [products]= useContext(productContext)

  const ds_category = products.reduce((acc,cv)=>[...acc, cv],[]);
  // console.log(category)
   
  // ds_category = [...new Set(ds_category)]
   
  return (
    <>
      
    

    <nav className='w-[15%] h-full bg-zinc-100 pt-5  '>

    <a href="/Create" className=' px-8  py-3  m-4  mt-0  inline-block  rounded-lg  border-4 border-green-300 text-black  '>


    Add New Product

    </a>

  <hr />
  <h1 className='ml-10 mb-3 mt-8  font-bold  '>Category Filter</h1>

  <ul className=' w-[50%] flex flex-col  justify-center items-center'>
    <li className=' mb-2  mt-2  flex justify-center items-center '>
   <span className=' rounded-full  mr-3 bg-blue-200 w-[15px] h-[15px] '></span>
      cart 1
    </li>

    <li className=' mb-2  mt-2  flex justify-center items-center '>
   <span className=' rounded-full  mr-3 bg-red-200 w-[15px] h-[15px] '></span>
      cart 2
    </li>

    <li className=' mb-2  mt-2  flex justify-center items-center '>
   <span className=' rounded-full  mr-3 bg-green-200 w-[15px] h-[15px] '></span>
      cart 3
    </li>
    
    
    <li className=' mb-2  mt-2  flex justify-center items-center '>
   <span className=' rounded-full  mr-3 bg-orange-200 w-[15px] h-[15px] '></span>
      cart 4
    </li>


  </ul>


</nav>



      
    </>
  
  )
}

export default Nav
