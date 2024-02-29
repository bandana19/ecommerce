import React, { Fragment, useContext, useState } from 'react'
import '../App.css'
import MyContext from '../state/MyContext'
import { Link } from 'react-router-dom'
const Header = () => {
    
    const data=useContext(MyContext)
    

    return (
        <Fragment>
        <div className=' row header'>
            <h2 className=' col-3 home-page '><Link to={'/'}>Home Page</Link></h2>
            <div className='col-6 '><input className='input-box' type='text' placeholder='Search items....' />
             <button className='btn btn-success search-button'>Search</button>
            </div>
            <div className=' col-3 cart-arrow '><i class="fa fa-shopping-cart"></i>
                <div className='circle'><span className='number'>
                    {data?.cart?.length}
                    </span></div>
            </div>
        </div>


        </Fragment>

    )
}

export default Header