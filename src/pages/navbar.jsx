import React from 'react'

const navbar = () => {
  return (
    <div className='navbody'>
        <div className='navbar'>
            <h1>Storefront</h1>
            <ul>
                <li className='button'>Shop</li>
                <li className='button'>About</li>
                <li className='button'>Contact</li>
            </ul>
            <p className='button'>Cart</p>
        </div>
    </div>
  )
}

export default navbar