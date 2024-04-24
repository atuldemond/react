import axios from './axios';
import React, { createContext, useEffect , useState } from 'react'


export  const  productContext = createContext();

const Context = (props) => {
    // console.log(props)

    const[product,setproducts] =  useState(null)

    const getproducts = async()=>{
        try{
                    const {data} = await axios("/products")
                   setproducts(data);
                //    console.log(data);
        }catch(err){
                console.log("This is error")
        }
    }
  
    useEffect(()=>{

        getproducts();
    },[])

  return (
    <div>
        <productContext.Provider value={[product,setproducts]}>{props.children}</productContext.Provider>
      
    </div>
  )
}  

export default Context
