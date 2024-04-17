import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'
import Form from './assets/components/Form'

function App() {

  const [user,setuser] = useState([])

  const handleform=(data)=>{
   setuser([...user,data]) 

  
  }

  const handleremove=(id)=>{
    setuser(()=> user.filter((item,index)=>index!=id))
  
  }


  return (
    <>

        <div className="main w-full h-screen bg-zinc-300 ">
              <div className="Card w-4/6 h-3/4  bg-green-600 gap-3 m-auto flex justify-center items-center rounded-md ">
              <Card handleremove={handleremove} user={user}/>
              </div>
             <div className="form Card w-4/6 h-36 bg-white m-auto flex justify-center items-center rounded-md">
             <Form handleform={handleform}/>
             </div>
              
        </div>
        
       
    </>
  )
}

export default App
