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

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

import { setCurrentUser } from './Redux/user/user.action';
import {selectCurrentUser} from './Redux/user/user.selector'
import {selectCollectioinForPreview } from './Redux/shop/shop.selector';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()

          }, () => {
            console.log(this.state);
          })
        });
      } 
      setCurrentUser({ userAuth });

      //Shifting our shop collection to firebase store
      // addCollectionAndDocuments('shopCollections',shopCollections.map(({title , items}) => ({title , items})) );
  

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to = '/'/>): (<SignInSignUp/>) } />
          <Route  path="/checkout" component={checkoutPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  shopCollections : selectCollectioinForPreview
});


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
