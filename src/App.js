import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage";
import Header from "./components/Header";
import SignInSignUp from "./pages/sign-in-sign-up"
import Footer from './components/Footer';

import "./App.css";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

import { setCurrentUser } from './Redux/user/user.action';
import {selectCurrentUser} from './Redux/user/user.selector'

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

      } else {
        setCurrentUser({ userAuth })
      }

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
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
