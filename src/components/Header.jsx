import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'


import { ReactComponent as Logo } from '../../src/Assets/logo1.svg'
import { auth } from "../Firebase/Firebase.utils"
import CartIcon from '../components/Cart/cart-icon'
import CartModal from '../components/Cart/cart-modal'



import './header.scss'

const Header = ({ currentUser , hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
      </Link>
        <Link className='option' to='/contact'>
          CONTACT
      </Link>
        {currentUser ? (
          <Link className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </Link >
        ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
        <CartIcon />

      </div>
      {
        hidden ? null :  <CartModal />

      }
     
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden : state.cart.hidden

});



export default connect(mapStateToProps)(Header);
