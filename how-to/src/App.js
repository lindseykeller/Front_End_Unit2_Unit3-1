import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import {GlobalContext} from "./context/GlobalContext";
import PrivateRoute from "./utils/PrivateRoute"
import AuthForm from "./components/AuthForm"
import Dashboard from "./components/Dashboard"

function App() {
  const [howtos, setHowtos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  return (
    <Router>
    <GlobalContext.Provider value={{howtos, setHowtos, loggedIn, setLoggedIn}}>
      <div className="App">
        <Nav/>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" render={ props => <AuthForm {...props} role="login" /> } />
        <Route path="/signup" render={ props => <AuthForm {...props} role="sign up" /> } />
        
      </div>
    </GlobalContext.Provider>
  </Router>
  );
}

export default App;
