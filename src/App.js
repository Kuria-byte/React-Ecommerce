import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignInSignUp from "./pages/sign-in-sign-up"
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div>
    <Header/>
      <Switch>
      
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
