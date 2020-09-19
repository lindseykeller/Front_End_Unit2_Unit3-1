import React, {useState, useEffect, useContext} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { GlobalContext} from "../context/GlobalContext";


export const HowToCard = (props) => {
return (

    {props.howtos.map(howto => {
        return (
            
        <div key={howto.id}>
            {editing === howto.id 
            ?  <>
                <input 
                    name="title"
                    value={edited.title}
                    onChange={handleChange} />
                <texarea 
                    name="content"
                    value={edited.content}
                    onChange={handleChange} />
            </>
            : <>
                <h3>{howto.title}</h3>
                <p>{howto.content}</p> 
            </>}
            <button onClick={_ => toggleEdit(howto)}>{editing===howto.id ? "Submit": "Edit How To"} </button>
            <button onClick={ _ => deleteHowTo(howto.id)}>Delete HowTo</button>
        </div>
       
    )
    })}
)
}
   

