import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/Footer'
import MyContext from '../../state/MyContext'

const ProductCard = () => {

    const [arr, setArr] = useState([])
    async function getData() {
        let productData = await fetch('https://dummyjson.com/products')
        let jsonData = await productData.json()
        setArr(jsonData.products)
       
    }
    useEffect(() => {
        getData()
    }, [])

    const stateData=useContext(MyContext)

    return (
        <Fragment>
        <div className='row'>
            {
                arr.map((item) => (
                <div className='col-3 border box-bg'>
                <Link to={'/product-details/'+item.id}>  <div className='images'><img className='image' src={item.thumbnail} /></div></Link> 
                        <h5 className='ml-4'>Brand : {item.brand}</h5>
                        <h6 className='ml-4'>Product Name : {item.category}</h6>
                        <h6 className='ml-4'>Title : {item.title}</h6>
                        <h6 className='ml-4'>Price : {item.price}</h6>
                        <h6 className='text-center'>Description.
                            <hr />
                            <p className='text-center'>{item.description}</p>
                        </h6>
                        <div className=' text-center'><button className='btn btn-primary' onClick={()=>stateData?.addCart(item)}>
                            {stateData?.cart?.some((itm)=>itm.id==item.id)? "Remove to cart":" Add to cart"}
                           
                           </button></div>
                    </div>
                    
                ))
            }
        </div>
</Fragment>
    )
}

export default ProductCard