import React from 'react'
import {useForm} from 'react-hook-form'
export default function Form({handleform}) {
  const {register,handleSubmit,reset}=useForm()

const  handlingsubmit = (data)=>{ 
       handleform(data);
       reset();

}


  return (
    <div >
      <div className="forms gap-2 bg-black rounded-md ">
      <form  className='flex justify-center items-center   gap-4 p-2 m-3 rounded-sm'  action="" onSubmit={handleSubmit(handlingsubmit)}>
        <input {...register("name")}  type="text" placeholder='name' />
        <input {...register("email")} type="email" placeholder='email' />
        <input {...register("image")} type="text" placeholder='image url' />
        <input className='bg-yellow-400 py-1 px-4 rounded-md font-bold text-black' type="submit" />

       </form>
      </div>
     
    </div>
  )
}
