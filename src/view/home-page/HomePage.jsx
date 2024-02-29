import React, { useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import ProductCard from './ProductCard'

const HomePage = () => {
  const [search, setSearch] = useState("")

  return (
    <div>
      <Header setSearch={setSearch} search={search}/>
      <ProductCard search={search}/>
      <Footer />
    </div>
  )
}

export default HomePage