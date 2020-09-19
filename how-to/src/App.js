
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import {ContextProvider} from "./context/GlobalContext";
import PrivateRoute from "./utils/PrivateRoute";
import AuthForm from "./components/AuthForm";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
   //moved to global context
  // const [howtos, setHowtos] = useState([]);
  // // const[users,setUsers] = useState([])
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  return (
    <ContextProvider>
      <div className="App">
        <Nav/>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" render={ props => <AuthForm {...props} role="login" /> } />
        <Route path="/signup" render={ props => <AuthForm {...props} role="signup" /> } />
        

        {/* <Route path="/login" render={ props => <Login {...props} /> } />
        <Route path="/signup" render={ props => <SignUpForm {...props} /> } /> */}
        
      </div>
    </ContextProvider>
  );
}

export default App;
