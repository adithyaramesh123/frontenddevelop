import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Signup'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Signup/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path ='/sign' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
