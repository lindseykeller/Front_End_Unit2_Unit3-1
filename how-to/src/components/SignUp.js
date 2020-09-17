import React,{useState,useEffect} from 'react';
import {Route,Link} from 'react-router-dom';
import LogInForm from './Login';



const SignUpForm =props=>{

    const defaultState = {
        name:'',
        email:'',
        userName:'',
        password:'',
        confirmPassword:'',
        terms:false,

    }
    const[user,setUser]= useState(defaultState)

    const handleChange= event=>{
        let newVal = event.target.type==='checkbox'? event.target.checked:event.target.value
        setUser({...user,[event.target.name]:newVal})
        console.log('user in Sign up form has changed',user)
    }

    const submitForm = event=>{

        event.preventDefault();
       props.setUsers([{...props.users,[event.target.name]:event.target.value}])

    }

    return(
        <div className='form-container'>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name ='name' value={user.name} onChange={handleChange}/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name ='email' value={user.email} onChange={handleChange}/>
                <label htmlFor='userName'>User Name</label>
                <input type='text' id='userName' name ='userName' value={user.userName} onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name ='password' value={user.password} onChange={handleChange}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='text' id='confirmPassword' name ='confirmPassword' value={user.confirmPassword} onChange={handleChange}/>
                <label htmlFor='terms'>Please agree to the terms</label>
                <input type='checkbox' id='terms' name ='terms' checked={user.terms} onChange={handleChange}/>
                
                <button>sign up </button>
                

            </form>
            <div className='button-container'>
                <span><button>Log in</button> if you have an count</span>
               
            </div>
        </div>
    )
}
export default SignUpForm