import React, { useState } from 'react';
import Login from './components/Login'



function App() {

  const[users,setUsers] = useState([])


  return (
    <div className="App">
      <Login users = {users}/>
      
    </div>
  );
}

export default App;
