import React from 'react'
import { connect } from 'react-redux'



import './check-out.scss'

import { addCartItems, clearCartItem, removeItem } from '../../Redux/cart/cart.action'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearCartItem }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => { removeItem(cartItem) }} > &#10094; </div>
                <span className='value'> {cartItem.quantity}  </span>
                <div className='arrow' onClick={() => { addItem(cartItem) }}  > &#10095; </div>
            </span>
            <span className='price'> {cartItem.price}</span>
            <div onClick={() => { clearCartItem(cartItem) }} className='remove-button'> &#10005; </div>

           

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearCartItem: item => dispatch(clearCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addCartItems(item))

});


export default connect(null, mapDispatchToProps)(CheckoutItem)
