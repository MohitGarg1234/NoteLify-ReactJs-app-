import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const {note, updateNote} = props;
  const context = useContext(noteContext);
    const {deleteNote} = context;
  return (
    <div className="col-md-3">
      <div className="card my-2 shadow-sm" style={{ backgroundColor: '#f8f9fa', borderColor: '#007bff' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title" style={{ color: '#007bff' }}>{note.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
            </div>
            <div className="d-flex">
              <i className="far fa-edit mx-2 text-primary" onClick={() => { updateNote(note) }} style={{ cursor: 'pointer' }}></i>
              <i className="far fa-trash-alt mx-2 text-danger" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success"); }} style={{ cursor: 'pointer' }}></i>
            </div>
          </div>
          <p className="card-text mt-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;





