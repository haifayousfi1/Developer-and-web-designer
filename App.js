import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages";
import Signinpage from "./pages/Signin";
import Navbar from "./components/Navbar";
function App() {
  const adminUser ={
    email: "haifayousfi95@gmail.com",
    password:"adminhaifa123"
  }
  return (
    <Router>
    
      <Switch>
<Route path="/" component={Home} exact />
<Route path="/signin" component={Signinpage} exact />

      </Switch>
    
      
    </Router>
  );
}

export default App;
