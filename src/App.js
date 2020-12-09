import React from 'react';
import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignInSignUp from "./pages/sign-in-sign-up"
import Footer from './components/Footer';
import "./App.css";
import { auth , createUserProfileDocument} from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot =>{
         this.setState({
           currentUser:{
             id: snapShot.id,
             ...snapShot.data()
           }
         }, ()=>{
           console.log(this.state);
         })
       });
       
     }else{
       this.setState({currentUser:userAuth })
     }
     
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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





export default App;
