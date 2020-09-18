import React, { useState } from 'react';
import Login from './components/Login'
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'



function App() {

  const[users,setUsers] = useState([])


  return (
    <div className="App">
      
  
      <Route exact path ='/' component={Login}/>
      <Route exact path='/signup'>
          <SignUp />
      </Route> 
      <Route path='/dashboard'component={Dashboard}/>
         
    </div>
  );
}

export default App;
