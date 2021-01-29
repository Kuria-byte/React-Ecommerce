import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage";
import Header from "./components/Header";
import SignInSignUp from "./pages/sign-in-sign-up"
import checkoutPage from './pages/checkout-page'
// import Footer from './components/Footer';

import "./App.css";

import {selectCurrentUser} from './Redux/user/user.selector'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {

    const {currentUser} = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=> currentUser ? (<Redirect to = '/'/>): (<SignInSignUp/>) } />
          <Route  path="/checkout" component={checkoutPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser

});



export default connect(mapStateToProps)(App);
