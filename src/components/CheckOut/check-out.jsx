import React from 'react'
import './check-out.scss'

const CheckoutItem = ({ cartItem }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'> {cartItem.quantity}  </span>
            <span className='price'> {cartItem.price}</span>
            <div className='remove-button' > &#10005; </div>

        </div>
    )
}



export default CheckoutItem
