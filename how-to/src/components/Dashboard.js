import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Dashboard = props=>{

let {user} = props

const[searchTerm,setSearchTerm] = useState({
    name:''
})

const handleChange = event=>{
    setSearchTerm({...searchTerm,name:event.target.value})
    console.log('input change',searchTerm)

}

    return (
        <div className='dash-conatainer'>
             <div className='navs'>
                <Link to = '/marketingPage'>Home</Link>
                <div className='search-container'>
                    <input type='text' placeholder='search for your How Tos' value={searchTerm.name} onChange={handleChange}/>
                    
                </div>
            </div>
            <h1>dashboard Container</h1>
            <ol style={{fontSize:'3rem'}}>
                <li>search input with button </li>
                <li>how to- form</li>
                <li>list all how-to cards </li>
            </ol>
        </div>
    )
}
export default Dashboard