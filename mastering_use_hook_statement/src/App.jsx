import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './assets/components/Cards'
import Usestate from './assets/components/Usestate'
import Odd from './assets/components/Odd'
import Add from './assets/components/Add'
import Object_inside_arr from './assets/components/Object_inside_arr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

             < Object_inside_arr/>
            {/* <Add/> */}
           {/* <Odd/> */}
         {/* <Usestate/> */}
        {/* <Cards/> */}
    </>
  )
}

export default App
