import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {GlobalContext} from "../context/GlobalContext";
import styled from 'styled-components'

const Group = styled.div`
display:flex;
flex-direction:column;
padding:1% 0;
width:25%;
margin: 0 10%;
justify-content: space-between`

export default function AddHowToForm() {
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
        axiosWithAuth().post("https://reqres.in/api/howtos", newHowTo)
            .then(res => {
                setHowTos([...howtos, res.data])

                setNewHowTo({
                    title: "",
                    content: ""
                })
            })
            .catch(err => console.log(err))
    }

    return(
        <form className='addNewHowTo-container' onSubmit={handleSubmit}>
            <Group>
                <h1>Add New How To</h1>
                <input 
                    type='text'
                    name="title"
                    value={newHowTo.howto}
                    onChange={handleChange} 
                    placeholder="Title"/>
                <textarea 
                    type='textArea'
                    name="content"
                    value={newHowTo.content}
                    onChange={handleChange} 
                    placeholder="Instructions" />
                <button type="submit">Submit</button>
            </Group>
           
        </form>

    )


}