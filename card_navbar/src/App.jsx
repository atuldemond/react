import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Card from './assets/components/Card'

function App() {
  const data =[
    {msuic:"Blue Eyes", artist:"YO YO " ,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", added:false},
    {msuic:"High Hills", artist:"YO YO " ,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", added:false},
    {msuic:"Brown Girl", artist:"YO YO " ,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", added:false},
    {msuic:"Makhna", artist:"YO YO" ,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", added:false},

]

const [val,setval] = useState(data)

const click=(index)=>{
      setval((prev)=>{
        return prev.map((value,index1)=>{
          if(index1 === index){
            return{...value , added:!value.added}
            
          }
          return value;
          })
      })
}

  return (
    <>
    <div className="nav">
    
     <Navbar data={val}/>
  
   
    </div>

      
     <div className="w-full h-screen bg-zinc-600  items-center flex gap-3 mt-0 flex-wrap justify-center">
    
      {val.map((item,index)=>(
        <Card  click={click} music={item.msuic} index={index} artist={item.artist} image={item.image} added={item.added}/>
      ))}

      
      </div>
    
  
      

   
      
     
    </>
  )
}

export default App
