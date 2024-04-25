import React, { useContext, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { productContext } from '../Utils/Context';
import {nanoid} from "nanoid"
import { toast } from 'react-toastify';

const Create = () => {

    const navigate = useNavigate()

    const [products, setproducts] = useContext(productContext)


    const [title , settitle ]=useState("");
    const [image , setimage ]=useState("");
    const [category , setcategory ]=useState("");
    const [price , setprice ]=useState("");
    const [desription, setdescription ]=useState("");




    const AddproductHandler = (e)=>{

            e.preventDefault();

            if(title.trim().length <4 || image.trim().length<5 || category.trim().length<5 || price.trim().length<1)

                {
                    alert("please enter atleast four characters")
                    return; 
                }
               
            

            const product ={
                id: nanoid(),
                title,
                image,
                category,
                price,
                desription,
            };
            setproducts([...products , product])
            localStorage.setItem("product", JSON.stringify([...products , product]));
            // toast.success("product saved")
            navigate("/")
            
            // console.log(products);


    }


  return (
    <>
            <form  onSubmit={AddproductHandler} className='p-[5%] w-screen items-center h-screen flex flex-col' >
                <div className='w-1/2'>
                  <h1 className='text-3xl font-semibold mb-3'>Add New Product</h1>
                </div>
              

                <input type="text" placeholder='title' className=" flex rounded text-1xl w-1/2 p-3  bg-zinc-100 mb-3" onChange={(e)=>settitle(e.target.value)}  value={title} />
                <input type="url" placeholder='image link' className=" flex rounded text-1xl w-1/2 bg-zinc-100 p-3  mb-3" onChange={(e)=>setimage(e.target.value)}  value={image} />

                <div className='w-1/2 flex justify-between gap-2'>


                <input type="text" placeholder='category' className=" flex rounded text-1xl w-1/2 p-3  bg-zinc-100 mb-3" onChange={(e)=>setcategory(e.target.value)}  value={category} />
                <input type="number" placeholder='price' className=" flex rounded text-1xl w-1/2 bg-zinc-100 p-3  mb-3" onChange={(e)=>setprice(e.target.value)}  value={price} />


                </div>
                <textarea placeholder='enter product description here...' className=" flex rounded text-1xl w-1/2 p-3   bg-zinc-100 mb-3" rows="10" onChange={(e)=>setdescription(e.target.value)}  value={desription} ></textarea>

                    <div className='w-1/2'>
                    
                    <button  className=' px-8  py-3 mt-2 inline-block  rounded-lg  border-2 border-red-300 text-red-300 font-semibold '>
                    Add New Product
                    </button> 

                    </div>

                
           
            </form>
    </>
  )
}

export default Create
