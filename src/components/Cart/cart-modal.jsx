import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../Redux/cart/cart.selector";
import { toggleCartHidden } from '../../Redux/cart/cart.action'

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "./cart-item";

import "./cart-modal.scss";

const CartModal = ({ cartItems, history , dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden ())
        }}
      >
      CHECKOUT
      </CustomButton>
    </div>
  );
};


// Normalized - Reselct allows us to select a slice of the state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Connect - automatically parses the maptodispatch hence we can aceess it under the props

export default withRouter (connect(mapStateToProps)(CartModal)) ;
