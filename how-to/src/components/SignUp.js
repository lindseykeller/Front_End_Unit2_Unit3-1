import userEvent from '@testing-library/user-event'
import React,{useState,useEffect} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'



const Form =props=>{

    const defaultState = {
        name:'',
        email:'',
        address:'',
        phone: '',
        password:'',
        confirmPassword:'',
        terms:false,

    }
    const[user,setUser]= useState(defaultState)

    const handleChange= event=>{
        let newVal = event.target.type==='checkbox'? event.target.checked:event.target.value
        setUser({...user,[event.target.name]:newVal})
        console.log('user in form has changed',user)
    }


    return(
        <div className='form-container'>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name ='name' value={user.name} onChange={handleChange}/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name ='email' value={user.email} onChange={handleChange}/>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' name ='address' value={user.address} onChange={handleChange}/>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' name ='phone' value={user.phone} onChange={handleChange}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='text' id='confirmPassword' name ='password' value={user.password} onChange={handleChange}/>
                <input type='checkbox' id='terms' name ='terms' checked={user.terms} onChange={handleChange}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                
                

            </form>
            <div className='button-container'>
                <button>Log in</button>
               <span> If you don't have acoount register here <button>sign up </button></span> 
            </div>
        </div>
    )
}
export default Form