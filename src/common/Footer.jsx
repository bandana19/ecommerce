import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
    <div className='footer'>
        <div className='pro'>About Us</div>
        <div className='row'>
          <div className='col-3 '>
            <p className='text-white ml-3'>Location : Bhatni Bujurg Deoria</p>
            <p className='text-white ml-3'>Pin Code :  274206</p>
            <p className='text-white ml-3'>Contant No : 8573890224</p>
            <p className='text-white ml-3'>Email : satendarsahani19@gmail.com</p>
          </div>
          <div className='col-3 '>
            <p className='text-white ml-5 mt-4'>Categories</p>
            <ul className="footer-links">
                            <li><a href="#">Hot deals</a></li>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Cameras</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
          </div>
          <div className='col-3 '>
          <h3 className="footer-title text-white ml-3 mt-4">Information</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
          </div>

          <div className='col-3'>
          <h3 className="footer-title text-white ml-3 mt-4">Service</h3>
                        <ul className="footer-links">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">View Cart</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
          </div>
        </div>
      </div> 
    </Fragment>
  )
}

export default Footer