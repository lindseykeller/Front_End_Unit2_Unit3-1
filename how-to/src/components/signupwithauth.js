// import React, {useState} from "react";
// import axios from "axios";
// import {GlobalContext} from "../context/GlobalContext";

// export default function Form({role, history}) {
//     const {setLoggedIn} = React.useContext(GlobalContext);

//     const [authInfo, setAuthInfo] = useState( {
//         name:'',
//         email:'',
//         address:'',
//         phone: '',
//         password:'',
//         confirmPassword:'',
//         terms:false,
//     })

//     const handleChange = e => {
//         setAuthInfo({
//             ...authInfo,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

        
//         axios.post( `https://better-professor-build-week.herokuapp.com/auth/register`, authInfo)
//             .then(res => {
//                 console.log(res)
//                     setLoggedIn(true);
//                     localStorage.setItem("token", res.data.token)
//                     history.push('/howtos')
//             })
//             .catch(err => console.log(err.message))
//     }

//     return(
//         <div className='form-container'>
//             <form onsubit={handleSubmit}>
//                 <label htmlFor='name'>Name</label>
//                 <input type='text' id='name' name ='name' value={user.name} onChange={handleChange}/>
//                 <label htmlFor='email'>Email</label>
//                 <input type='email' id='email' name ='email' value={user.email} onChange={handleChange}/>
//                 <label htmlFor='address'>Address</label>
//                 <input type='text' id='address' name ='address' value={user.address} onChange={handleChange}/>
//                 <label htmlFor='phone'>Phone</label>
//                 <input type='text' id='phone' name ='phone' value={user.phone} onChange={handleChange}/>
//                 <label htmlFor='confirmPassword'>Confirm Password</label>
//                 <input type='text' id='confirmPassword' name ='password' value={user.password} onChange={handleChange}/>
//                 <input type='checkbox' id='terms' name ='terms' checked={user.terms} onChange={handleChange}/>
//                 <label htmlFor='confirmPassword'>Confirm Password</label>
                
//                 <button>Log in</button>
         

//             </form>
//             <span> If you don't have acoount register here <button>sign up </button></span> 
//             </div>
    
//     )
// }
