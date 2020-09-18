import React from 'react';

const Dashboard = props=>{

let {user} = props
    return (
        <div className='dash-conatainer'>
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