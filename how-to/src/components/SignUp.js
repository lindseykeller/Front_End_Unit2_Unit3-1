import React,{useState,useEffect} from 'react';
import {Route,Link} from 'react-router-dom';
import LogInForm from './Login';
import * as yup from 'yup';
import axios from 'axios';



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

    const[disabledButton,setDisabledButton] = useState(true)

    const[errors,setErrors] = useState({
        name:'',
        email:'',
        userName:'',
        password:'',
        confirmPassword:'',
        terms:'',
    })

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is a required field').min(2,'minimum tow characters'),
        email: yup.string().email('enter a valid email').required('email is required field'),
        userName: yup.string().required('Must choose a user name').min(4,'minimum four characters'),
        password: yup.string().required('must enter password').min(6,'minimum six characters'),
        confirmPassword: yup.string().matches(user.password,'Must match password entered'),
        terms: yup.boolean.oneOf([false],'please agree the terms'),
    })

    // check the validity of input
  

    const validateInput = event=>{
        yup
        .reach(user,event.target.name)
        .validate(event.target.type==='checkbox'?event.target.checked:event.target.value)
        .then(valid=>{
            setErrors(
                {...errors,[event.target.name]:''
            })
        })
        .catch(err=>{
            setErrors(
                {...errors,[event.target.name]:err.errors[0]
            })
        })

    }
    // track the changes
    const handleChange= event=>{
        event.persist();
        let newVal = event.target.type==='checkbox'? event.target.checked:event.target.value
        let newUser = {
            id: Date.now(),
            [event.target.name]:newVal
        }
        setUser({...user,newUser})
        validateInput(event)

        console.log('user in Sign up form has changed',user)
    }

    //enable submit button if the form validated 
    useEffect(()=>{
        formSchema
        .isValid(user)
        .then(valid=>{
            setDisabledButton(!valid)
        })

    },[user])

    // Reset form after submittion
    const reset = ()=>{
        setUser(defaultState)
    }
    const submitForm = event=>{
        event.preventDefault();
        axios
        .post('https://reqres.in/api/users',user)
        .then(res=>{

            props.setUsers([...props.users,res.data])
        })
        .catch(err=>{
            console.log("Didn't work")
        })

    //    props.setUsers([...props.users,[event.target.name]:event.target.value])
       reset();
       console.log('form submitted')

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