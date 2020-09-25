
import React, { useState, useContext } from "react";
import  {GlobalContext}  from "../context/GlobalContext";
import axiosAuth from '../utils/axiosWithAuth'

const HowToCard = () => {
  
  const [ howtos, setHowTos ] = useContext(GlobalContext);
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    title: "",
    content: "",
  });

  const toggleEdit = (howto) => {
    if (editing !== howto.id) {
      setEdited(howto);
      setEditing(howto.id);
    } else {
      axiosAuth()
        .put(`https://joses-how-to-api.herokuapp.com/api/auth/users/:id/posts/:id`, edited)
        .then((res) => {
          setHowTos([
            ...howtos.filter((item) => item.id !== howto.id),
            res.data,
          ]);
          setEditing(0);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (e) =>{
    setEdited({ ...edited, [e.target.name]: e.target.value });}
  const deleteHowTo = (id) => {
    axiosAuth()
      .delete(`https://joses-how-to-api.herokuapp.com/api/auth/users/:id/posts/:id`)
      .then((res) => setHowTos(howtos.filter((item) => item.id !== id)))
      .catch((err) => console.log(err));
  };

  return(

    <div>
    { howtos.map((howto) => {
        return (
          <div key={howto.id}>
            {editing === howto.id ? 
              <div className='card-edit'>
                <input
                  name="title"
                  value={edited.title}
                  onChange={handleChange}
                />
                <textarea
                  name="content"
                  value={edited.content}
                  onChange={handleChange}
                />
              </div>
             : 
              <div className='card-container'>
                <h3>{howto.title}</h3>
                <p>{howto.content}</p>
              </div>
            }
            <button onClick={(_) => toggleEdit(howto)}>
              {editing === howto.id ? "Submit" : "Edit How To"}{" "}
            </button>
            <button onClick={(_) => deleteHowTo(howto.id)}>Delete HowTo</button>
            
          </div>
        )
      })
   
    }
    </div>
    )
  }



  


  export default HowToCard