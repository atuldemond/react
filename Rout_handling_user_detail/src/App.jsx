import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Nav from './Components/Nav'
import Routing from './assets/util/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Nav/>
      <Routing/>
    </>
  )
}

export default App
