import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'

import { productContext } from '../Utils/Context'
import Loading from './Loading'
import axios from '../Utils/axios'


const Home = () => {

  const [products]= useContext(productContext)

  const {search} = useLocation();
  const category =decodeURIComponent( search.split("=")[1])


const [filteredProducts, setfilteredProducts] = useState(null)


  const getproductcategory = async()=>{

    try {
      const { data } = await axios.get(`/products/category/${category}`)
      console.log(data)
      setfilteredProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
          if (!filteredProducts || category == "undefined") setfilteredProducts(products)
          if(category  != "undefined") getproductcategory();

  },[category, products])

 

  return  products ? (
   <>
    <Nav /> 
     
     <div className="h-full w-[85%] p-5 pt-[5%] flex flex-wrap gap-2  overflow-x-hidden overflow-y-auto ">
            
            {filteredProducts && filteredProducts.map((p,i)=>
          <Link key={p.id} to={`/details/${p.id}`} className=' card p-5 border shadow w-[18%] h-[30vh] flex justify-center items-center flex-col '>
          <div  
            className='hover:scale-110 duration-75 ease-out w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center'
            style={
            
            {backgroundImage:  
              
              `url(${p.image})` ,
    
            }}>
            
          </div>
          <h1 className='hover:text-blue-300 '>{p.title}</h1>
         </Link>


          )}


            
        
        
        
        
            </div>
   </>
  ) : (
    <Loading/>
  )
}

export default Home
