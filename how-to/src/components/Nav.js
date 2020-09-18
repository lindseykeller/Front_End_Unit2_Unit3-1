import React from "react";
import {Link} from "react-router-dom";
import {GlobalContext} from  "../context/GlobalContext";

export default function Navigation() {
    const {loggedIn, setLoggedIn} = React.useContext(GlobalContext);


    const logout = _ => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }

    return (
        <div>
            <Link to="/howtos">Dashboard</Link>
            {loggedIn 
            ? <Link onClick={logout}>Log Out</Link>
            : <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            </>}
            
            
        </div>
    )
}