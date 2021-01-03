import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage";
import Header from "./components/Header";
import SignInSignUp from "./pages/sign-in-sign-up"
import Footer from './components/Footer';

import "./App.css";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from './Redux/user/user.action';

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
        setCurrentUser({userAuth })
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
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({

  setCurrentUser: (user) => dispatch(setCurrentUser(user))

})



export default connect(null, mapDispatchToProps)(App);
