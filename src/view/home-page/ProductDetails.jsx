import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import MyContext from '../../state/MyContext'

const ProductDetails = () => {
  const [details, setDetails] = useState({})
  
 
  const { productId } = useParams()


  async function getData() {
    let data = await fetch('https://dummyjson.com/products/' + productId)
    let change = await data.json()
    setDetails(change)
  }
  useEffect(() => {
    getData()
  }, [])

  const stateData=useContext(MyContext)

  
  return (
    <Fragment>
      <Header/>
      <div className='container border h-700'>
        <div className='container h-201 '><img className='thumbnail' src={details.thumbnail} /> </div>
        <div className='row box'>
          <div className='col-6 '>
            <h5 className='text-center'>Brand : {details.brand}</h5></div>
          <div className='col-6 text-center'>Product Name : {details.category}</div>
        </div>
        <div className='row color-box'>
          <div className='col-6 text-center'>Title : {details.title}</div>
          <div className='col-6 text-center'>Price : ${details.price}.00</div>
        </div>
        <div className='row text-box'>
          <div className='col-12 text-center'>Description.</div>
          <div className='col-12  text-center'><p>{details.description}</p></div>
        </div>
        <div className='col-12 text-center mt-26'>
          <button className='btn btn-success' onClick={() => stateData?.addCart(details)}>
            {stateData?.cart?.some((item)=>item.id==details.id)?'Remove to cart':'Add to cart'}
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>

  )
}

export default ProductDetails