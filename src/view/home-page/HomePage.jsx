import React, { useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import ProductCard from './ProductCard'

const HomePage = () => {
  return (
    <div>
        <Header/>
          <ProductCard />
      <Footer/>
    </div>
  )
}

export default HomePage