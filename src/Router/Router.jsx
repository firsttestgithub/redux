import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Components/Home'
import Cart from '../Components/Cart'

const Router = () => {
  return (
    <Route>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Cart />}/>
    </Route>
  )
}

export default Router