import React from 'react'
import image from '../contents/shop.avif'
import questions from '../contents/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'


const dealpage = () => {
  return (
    <div className='deal-body'>
        <h1 className='head-text'>Products</h1>
        <h3>New Winter Stock</h3>
        <div className='product-grid'>
        {questions.map((product)=>
            <div className='product-card'>
                <img src={image} alt="" />
                <div className='buy-info'>
                    <div className='text-content'>
                        <h1>{product.productName}</h1>
                        <p className='stars'><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
                        <p>${product.productPrice}</p>
                    </div>
                    <div className='buy-button'>
                        <button><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default dealpage