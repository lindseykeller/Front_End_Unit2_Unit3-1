import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {GlobalContext} from "../context/GlobalContext";

export default function AddQuoteForm() {
    const {howtos, setHowTos} = React.useContext(GlobalContext);
    const [newHowTo, setNewHowTo] = useState({
        title: "",
        content: ""
    })

    const handleChange = e => {
        setNewHowTo({
            ...newHowTo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("https://url.com/howtos", newHowTo)
            .then(res => {
                setNewHowTo([...howtos, res.data[0]])
                setHowTos({
                    title: "",
                    content: ""
                })
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={newHowTo.howto}
                onChange={handleChange} 
                placeholder="Title"/>
            <input
                name="content"
                value={newHowTo.content}
                onChange={handleChange} 
                placeholder="Instructions" />
            <button type="submit">Submit</button>
        </form>

    )


}