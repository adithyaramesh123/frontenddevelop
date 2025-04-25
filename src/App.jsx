import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Signup'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'
import Admin from './component/Admin'
import Name from './component/Name'
import Product from './component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Signup/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path ='/sign' element={<Signup/>}/>
        <Route path='/admin' element={<Name child={<Admin/>}/>}/>
        <Route path='/p' element={<Name child={<Product/>}/>}/>
      </Routes>
    </>
  )
}

export default App
