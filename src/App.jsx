import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/Products'
import Details from './pages/Details'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Carts from './pages/carts'
import Checkout from './pages/checkout'

export default function App() {

  return (
    <Router basename='/final-project'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id'element={<Details />} />
        <Route path='/signup'element={<Signup />} />
        <Route path='/signin'element={<Signin />} />
        <Route path='/carts' element={<Carts/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </Router>
  )
}
