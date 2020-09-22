
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import {GlobalContext} from "./context/GlobalContext";
import PrivateRoute from "./utils/PrivateRoute"
import AuthForm from "./components/AuthForm"
import Dashboard from "./components/Dashboard"

import Login from './components/Login'
import Signup from './components/SignUp'


function App() {
  const [howtos, setHowtos] = useState([]);
  const[users,setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  return (
    <GlobalContext.Provider value={{howtos, setHowtos, loggedIn, setLoggedIn}}>
      <div className="App">
        <Nav />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard-test' component={Dashboard}/>
        
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
