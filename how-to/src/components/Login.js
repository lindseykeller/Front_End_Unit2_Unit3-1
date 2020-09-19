

import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import *as yup from 'yup'
import {Route,Link} from 'react-router-dom'
import SignUp from './SignUp'
import styled from 'styled-components'

const Group = styled.div`
display:block`




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

    const[errors,setErrors] = useState({

        

        userName:'',
        password:'',
        message:''
    })

    const logFormSchema = yup.object().shape({
        userName: yup.string().required('must enter user name'),
        password: yup.string().required('must enter password')
    })

    const handleChange= event=>{
       
        setLoginUser({...loginUser,[event.target.name]:event.target.value})
        console.log('user Login in Login form has changed',loginUser)
    }

    //if credentials are correct grant access to dashboard

    const grantAccess = ()=>{
        users.map(user=>{
            if(user.userName===loginUser.userName && user.password===user.password){
                return (<Dashboard user = {loginUser}/>)
            }else{
                return setErrors('You entered invalid user Name or Password')
            }
            
        })

    }
  


    return(
        <div className='form-container'>

            <form onSubmit={grantAccess}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='userName' name ='userName' value={loginUser.userName} onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name ='password' value={loginUser.password} onChange={handleChange}/>

                {errors.message.length>0?<p className= 'error'>{errors.message}</p>:null}

            <div className='navs'>
                <Link to = '/marketingPage'>Home</Link>
            </div>
            <h1>Welcome to Sign in to How Tos</h1>
            <form onSubmit={grantAccess}>
                <Group>
                    <label htmlFor='userName'>User Name</label>
                    <input type='text' id='userName' name ='userName' value={loginUser.userName} onChange={handleChange}/>
                </Group>
                <Group>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name ='password' value={loginUser.password} onChange={handleChange}/>
                    {/* {errors.message.length>0?<p className= 'error'>{errors.message}</p>:null} */}
                </Group>
                


                <button>Log in</button>
            </form>
            <div className='button-container'>
              
               <span> If you don't have acoount register here <Link to='/signup'>sign up </Link></span> 
            </div>


         
           
        </div>
    )

export default LogInForm

