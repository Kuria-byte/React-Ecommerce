import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

import './cart-modal.scss'


const CartModal =() => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton> CHECKOUT</CustomButton>
        </div>
    )
}

export default CartModal
