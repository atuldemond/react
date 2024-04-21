import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <div className="h-screen w-screen">

        <nav className='w-[15%] h-full bg-zinc-100 pt-5 '>

            <a href="/Create" className=' px-8  py-3  m-4  rounded-lg  border-4 border-green-200 text-blue-200  '>


            Add New Product

            </a>

          <hr />
          <h1 className='ml-10  mt-4  font-bold  '>Category Filter</h1>

          <ul className='bg-red-200 w-[50%] flex flex-col  justify-center items-center'>
            <li className='bg-red-200 mb-2 '>
              <span>cat 1</span>
            </li>
            
          </ul>


        </nav>

      </div>
    </>
  )
}

export default App
