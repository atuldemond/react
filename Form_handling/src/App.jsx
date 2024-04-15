import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'
import Control_Comp from './assets/components/Control_Comp'
import React_hook from './assets/components/React_hook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card/> */}
      {/* <Control_Comp/> */}
      <React_hook/>
    </>
  )
}

export default App
