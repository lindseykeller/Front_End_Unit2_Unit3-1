import React, { createContext } from "react";

export const GlobalContext = createContext();


export const ContextProvider = (props) =>{
    const [howtos, setHowtos] = useState([]);
    // const[users,setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false);;
    return(
         <GlobalContext.Provider value={{howtos, setHowtos, loggedIn, setLoggedIn}}>
             {props.children}
         </GlobalContext.Provider> 
    );

}