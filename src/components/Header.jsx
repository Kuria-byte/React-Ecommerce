import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../src/Assets/logo1.svg";
import { auth } from "../Firebase/Firebase.utils";
import CartIcon from "../components/Cart/cart-icon";
import CartModal from "../components/Cart/cart-modal";

import { selectCartHidden } from "../Redux/cart/cart.selector";
import { selectCurrentUser } from "../Redux/user/user.selector";

import "./header.scss";
import { logOut } from "../Redux/user/user.action";

const Header = ({ currentUser, hidden, logOut }) => {
  const handleClick = () => {
    auth.signOut();
    logOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="option" onClick={handleClick}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartModal />}
    </div>
  );
};

// This is the default way - It is not optimised
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden : state.cart.hidden
// });


// Selector in use - to fetch current user state and hidden state
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });


const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

//Structured Selector - Passes the top level state automatically to each selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
