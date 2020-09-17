import React from 'react';

import React,{useState,useEffect} from 'react'




const LogInForm =props=>{

    
    const[users,setUsers]= useState([{
        name:'',
        email:'',
        userName:'',
        password:'',
    }]);
   
    const[loginUser,setLoginUser]= useState({
    userName:'',
    password:'',

})

    const handleChange= event=>{
       
        setLoginUser({...loginUser,[event.target.name]:event.target.value})
        console.log('user Login in Login form has changed',loginUser)
    }

    //if credentials are correct grant access to dashboard

    const grantAccess = ()=>{

        users.map(user=>{
            if(user.userName===loginUser.userName && user.password===user.password){
                return ({/*dashboard component*/})
            }else{
                return 'You entered invalid user Name or Password'
            }
            
        })

    }


    return(
        <div className='form-container'>
            <form onSubmit={grantAccess}>
            <input type='text' id='userName' name ='userName' value={loginUser.userName} onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name ='password' value={loginUser.password} onChange={handleChange}/>
                {/*display error here if username or password is incorrect*/}

                <button>Log in</button>
            </form>
            <div className='button-container'>
              
               <span> If you don't have acoount register here <button>sign up </button></span> 
            </div>
        </div>
    )
}
export default LogInForm