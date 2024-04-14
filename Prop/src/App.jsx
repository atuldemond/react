import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  
const data = [
  {name:"Rahul kumar" , proffesion:"Coder", age:21,image:"https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,friends:false},
  {name:"Anup Singh" , proffesion:"Student", age:23,image:"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
  {name:"Prince Kumar" , proffesion:"Cricket", age:19,image:"https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
  {name:"Vikash Kumar" , proffesion:"Farmer", age:12,image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},

]

const [val,setval] = useState(data)


const frindchange= (inx)=>{
      setval((pre)=>{
       return pre.map((item,index)=>{
            if(index===inx){
                return {...item, friends:!item.friends};
            }
            return item;
        })

      })

    }

 

  return (
    <>
    <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center ">
           {val.map((item,index)=>(
            <Card image={item.image} friends={item.friends} index={index} frindchange={frindchange}  name={item.name} proffesion={item.proffesion} />
           ))}
       
    </div>
  
    </>
  )
}

export default App
