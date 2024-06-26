import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";
import { useState } from "react";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const {addNote } = context;
  const [note,setNote] = useState({title:"",description:"",tag:""})
  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert("Added Successfully","success");
    setNote({title:"",description:"",tag:""});
  }
  const onChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (

    <div className="container my-3 rounded" style={{width:"70%",backgroundColor:"#ffffff",border:"1px solid gray"}}>
      <h1>Add a Note</h1>
      <form className="my3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control"id="title" name="title" value={note.title} onChange ={onChange} aria-describedby="emailHelp" minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control"id="description" name="description" value={note.description} onChange ={onChange} aria-describedby="emailHelp" minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control"id="tag" name="tag" value={note.tag} onChange ={onChange} aria-describedby="emailHelp"/>
        </div>

        <button disabled={note.title.length<3 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary mb-3">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
