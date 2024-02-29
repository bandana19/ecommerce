import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../view/home-page/HomePage'
import ProductDetails from '../view/home-page/ProductDetails'

const Router = () => {
  return (
 <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/product-details/:productId' element={<ProductDetails/>}/>
        </Routes>
    </BrowserRouter>
 </div>
  )
}

export default Router