import React , {useContext , useRef, useState} from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Notes = (props) => {
    let history = useNavigate();
    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context;
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        history("/login")
      }
      // eslint-disable-next-line
    },[])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
    const updateNote = (currentNote) =>{
      ref.current.click();
      setNote({id :currentNote._id, etitle : currentNote.title , edescription : currentNote.description , etag : currentNote.tag})
    }
    
    const handleClick = (e) =>{
      editNote(note.id,note.etitle,note.edescription,note.etag);
      refClose.current.click();
      // e.preventDefault();
      props.showAlert("Updated Successfully","success");
      // addNote(note.title,note.description,note.tag);
    }
    const onChange = (e) =>{
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} type="button"   className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form className="my3">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control"id="etitle" name="etitle" value={note.etitle} onChange ={onChange} aria-describedby="emailHelp" minLength={3} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control"id="edescription" name="edescription" value={note.edescription} onChange ={onChange} aria-describedby="emailHelp" minLength={5} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control"id="etag" name="etag" value={note.etag} onChange ={onChange} aria-describedby="emailHelp"/>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<3 || note.edescription.length<5}onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  );
};

export default Notes;
