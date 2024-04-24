import React, { useEffect, useState } from 'react'
import{ Link, useParams} from "react-router-dom"
import { productContext } from '../Utils/Context'
import { useContext } from 'react'
import axios from '../Utils/axios'
import Loading from './Loading'


const Details = () => {

    const [product , setproducts] = useState(null);
   const {id} =useParams();
   
//    console.log(id);
    const [products]= useContext(productContext)

    const getsingleproducts = async() => {

        try {
            const {data} = await axios.get(`/products/${id}`)
            setproducts(data)
            console.log()
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{


      getsingleproducts();  
    },[])
    
  return product ? (
    <div className='w-[80%] flex justify-between  items-center  h-full m-auto p-[10%] '>

            <img className='hover:scale-125 duration-75 ease-out  object-contain   h-[80%] w-[40%]' src={`${product.image}`} alt="" />
            <div className="content   w-[50%]">

                    <h1 className='text-5xl'>{product.title}</h1>
                    <h3 className='text-zinc-400 my-5'>{product.category}</h3>
                    <h2 className='text-red-400 font-semibold mb-3'>$ {product.price}</h2>
        
                    <p className='mb-5'>{product.description}</p>
                    <Link className=' px-8  py-2 mt-10 rounded-lg  border-2 border-blue-300 text-black  '>Edit</Link>
                    <Link className=' px-8  py-2 ml-2  mt-10  rounded-lg  border-2 border-red-300 text-black  '>Delete</Link>

            </div>
    </div>) : ( 
    <Loading/>

          )
  
}

export default Details
