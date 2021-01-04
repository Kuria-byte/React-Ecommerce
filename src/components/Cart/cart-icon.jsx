import React from 'react'
import {connect} from 'react-redux'

import { toggleCartHidden } from '../../Redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon =({toggleCartHidden,cartItems}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className = 'item-count'>{(cartItems).length} </span>
        </div>
    )
}

const mapStateToProps = (state)=>({
    cartItems : state.cart.cartItems
})


const mapDispatchToProps = (dispatch)=>({
toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect (mapStateToProps,mapDispatchToProps) (CartIcon);
