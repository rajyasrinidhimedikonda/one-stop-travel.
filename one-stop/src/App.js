import React from 'react'
import Search from './components/Search'
import './index.css'
import Signup from './components/Signup'
import Kitpage from './components/Kitpage'
import Login from './components/Login'
import Checkout from './components/Checkout'
import Test from './components/Test'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route exact path='/search' element={<Search />} > </Route>
        <Route exact path='/signup' element={<Signup/>}> </Route>
        <Route exact path='/login' element={<Login/>}> </Route>
        <Route exact path='/kit' element={<Kitpage/>}> </Route>
        <Route exact path='/checkout' element={<Checkout/>}> </Route>



      </Routes>
    </div>
    

  )
}

export default App