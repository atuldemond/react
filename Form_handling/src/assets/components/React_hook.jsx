import React from 'react'
import {useForm} from 'react-hook-form'


export default function React_hook() {
const {register, handleSubmit}= useForm()

console.log(register());
    
const stop= (event)=>{
event.preventDefault();

}
  return (
    <div>
       <form action="" onSubmit={handleSubmit(data=> console.log(data)) }>
        <input {...register('name')} placeholder='name' type="text" />
        <input {...register('email')} placeholder='email' type="email" />
        <input {...register('age')} placeholder='age' type="number" />
        <input {...register('password')} placeholder='password' type="password" />
        <input type="submit" />
       </form>
    </div>
  )
}
