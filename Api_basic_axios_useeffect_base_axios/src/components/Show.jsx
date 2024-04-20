import React, { useEffect, useState } from 'react'
import axios from '../components/axios'
function Show() {


    const [val , setval] = useState([])

  
  const getproduct = ()=>{

    const api = "/products"
    
    axios.get(api).then(data=>{
    //   console.log(data)
      setval(data.data)

    }).catch(err=>{
      console.log(err)
    })
      
  }

  const saveproduct = ()=>{

    const api = "/products"
    
    axios.post(api ,{

      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'




    }).then(data=>{
      console.log(data)

    }).catch(err=>{
      console.log(err)
    })
      
  }
  useEffect(()=>{
      getproduct();


  },[])
  return (
    <div>
         <button onClick={getproduct} className='bg-red-400 m-3 p-4 rounded-md font-extrabold text-black '>getting Data from DB</button>
         <button onClick={saveproduct} className='bg-red-400 m-3 p-4 rounded-md font-extrabold text-black '>Save Data to DataBase</button>

        <ul className=' flex flex-col justify-center text-center '>

            {val.length >0 ?val.map(p=> <li key={p.id} className='   bg-red-200 p-4  w-1/3 m-5 rounded-md '>
                        { p.title}

            </li>): <h1>Loading...</h1> }
            </ul>
    </div>
  )
}

export default Show
