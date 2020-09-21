

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
       
    })
    const[disabledButton,setDisabledButton] = useState(true);

    const logFormSchema = yup.object().shape({
        userName: yup.string().required('must enter user name'),
        password: yup.string().required('must enter password')
    })

    const validate = e=>{
        yup
        .reach(logFormSchema,e.target.name)
        .validate(e.target.value)
        .then(valid=>{
            setErrors(
                {...errors,[e.target.name]:''
            })
        })
        .catch(err=>{
            setErrors(
                {...errors,[e.target.name]:err.errors[0]
            })
        })
    }
    //enable submit button if the form validated 
    useEffect(()=>{
        logFormSchema
        .isValid(loginUser)
        .then(valid=>{
            setDisabledButton(!valid)
        })

    },[loginUser])

    const handleChange= event=>{
       
        setLoginUser({...loginUser,[event.target.name]:event.target.value})
        validate(event);
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

          
            <h1>Welcome to Sign in to How Tos</h1>
            <form onSubmit={grantAccess}>
                <Group>
                    <label htmlFor='userName'>User Name</label>
                    <input type='text' id='userName' name ='userName' value={loginUser.userName} onChange={handleChange}/>
                    {errors.userName.length>0?<p className= 'error'>{errors.userName}</p>:null}
                </Group>
                <Group>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name ='password' value={loginUser.password} onChange={handleChange}/>
                    {errors.password.length>0?<p className= 'error'>{errors.password}</p>:null}
                </Group>
                


                <button disabled={disabledButton}>Log in</button>
            </form>
            <div className='button-container'>
              
               <span> If you don't have acoount register here <Link to='/signup'>sign up </Link></span> 
            </div>


         
           
        </div>
    )
}

export default LogInForm

