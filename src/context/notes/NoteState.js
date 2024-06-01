import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://notelify-backend.onrender.com"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    // console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      // body: JSON.stringify({title, description, tag})
    });
    // const json = response.json();
    // console.log(json);
    // // Delete note
    // console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    
    
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = response.json();
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
  

}
export default NoteState;




// import { useState } from "react";
// import NoteContext from "./noteContext";

// const NoteState = (props) =>{
//     const host = "http://localhost:5000"
//     const notesInitial = []
//       const [notes,setNotes] = useState(notesInitial)
//       //Get all notes
//       const getNotes = async ()=>{
//         // API call
//         const respone = await fetch(`${host}/api/notes/fetchallnotes`,{
//             method:"GET",
//             headers:{
//                 "Content-Type":"application/json",
//                 "auth-token":localStorage.getItem('token')
//             },
//         });
//         const json =  await respone.json();
//         console.log(json)
//         setNotes(json)
//     }
//       //Add a note
//       const addNote = async (title,description,tag)=>{
//         // API call
//         const respone = await fetch(`${host}/api/notes/addnote`,{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json",
//                 "auth-token":localStorage.getItem('token')
//             },
//             body: JSON.stringify({title,description,tag})
//         });
//         const json =  respone.json();
//         console.log(json);
//         // logic to add note
//         const note = {
//             "_id": "6494518c204a4e184b6cb2",
//             "user": "64941bf20925f6faa989dbc5",
//             "title": title,
//             "description": description,
//             "tag": tag,
//             "date": "2023-06-22T13:50:04.973Z",
//             "__v": 0
//         }
//         setNotes(notes.concat(note));
//     }
//     //Delete a note
//     const deleteNote = (id)=>{
//         const newNotes = notes.filter((note)=>{return note._id !== id})
//         setNotes(newNotes);
//     }
//       //Edit a note
//       const editNote = async (id,title,description,tag)=>{
//           // API call
//           const respone = await fetch(`${host}/api/notes/updatenote/${id}`,{
//               method:"POST",
//               headers:{
//                   "Content-type":"application/json",
//                   "auth-token":localStorage.getItem('token')
//                 },
//                 body: JSON.stringify({title,description,tag})
//             });
//             const json =  respone.json();
//             console.log(json);
//         // Logic to edit
//         for (let index = 0; index < notes.length; index++) {
//             const element = notes[index];
//             if(element._id === id){
//                 element.title = title;
//                 element.description = description;
//                 element.tag = tag;
//             }
//         }
//       }
//     return(
//         <>
//         <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
//             {props.children}
//         </NoteContext.Provider>

//         </>
//     )
// }
// export default NoteState;