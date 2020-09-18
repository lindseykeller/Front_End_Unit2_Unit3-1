import React, {useState, useEffect, useContext} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { GlobalContext} from "../context/GlobalContext";
import AddHowToForm from "./AddHowToForm";


export default function Dashboard () {
    const { howtos, setHowtos } = useContext(GlobalContext);
    const [editing, setEditing] = useState(0);
    const [edited, setEdited] = useState({
        title: "",
        content: ""
    })

    const getHowTos = _ => {
        axiosWithAuth().get("https://url.herokuapp.com/howtos")
            .then(res => setHowtos(res.data))
            .catch(err => console.log(err))
    }
//help
    // useEffect( _ => {
    //     getQuotes();

    //     });
 

    const toggleEdit = howto => {
        if (editing !== howto.id) {
            setEdited(howto)
            setEditing(howto.id)
        } else {

            axiosWithAuth().put(`https://url.herokuapp.com/howtos/${howto.id}`, edited)
                .then(res => {
                    setHowtos([...howtos.filter(item => item.id !== howto.id), res.data])
                    setEditing(0);
                })
                .catch(err=> console.log(err))
            
        }
    }

    const handleChange = e => setEdited({...edited, [e.target.name]: e.target.value});


    const deleteHowTo = id => {
        axiosWithAuth().delete(`https://url.herokuapp.com/howtos/${id}`)
            .then(res => setHowtos(howtos.filter(item => item.id !== id)))
            .catch(err => console.log(err));
    } 


    return(
        <div>
            {howtos.map(howto => {
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
            <AddHowToForm />
        </div>

    )
}