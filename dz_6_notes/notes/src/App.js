import React   from "react";
import {useEffect}   from "react";
import {useState}   from "react";
import Notes from "./Components/Notes/Notes";
import contactService from "./contactbook-service";

import "./css/App.css";
import "./css/reset.css";

export default function App () {

  const [notesItems, setNotesItems] =  useState([])
  const [dragObject, setDragObject]=useState({})
 




function onSaveServ (notes)  {
     contactService.put("/" + notes.id,notes);
  };

function createNotes (stick) {
  contactService.post("/", stick).then(({ data }) => {
    setNotesItems([...notesItems, data]);   });
}  

useEffect(() => {
  contactService
  .get("/")
  .then(({ data }) => setNotesItems(data));
}, [])
   
   
function onClickAddNotes () {
  const stick={
               description:"Khram_Alex",
               x:"100",
               y:"200",
               height:"150",
               width:"200",
             }
  createNotes (stick)      
}

function delNote (id) {
  const noteslist = notesItems.filter((item) => item.id !== id);
  contactService.delete("/" + id);

   setNotesItems([...noteslist]); 
}




  
    return (
      <div className="notes-wrap">
        <div className="notes-header"><button className="addNotes" onClick={onClickAddNotes}>ADD</button></div>
        {notesItems.map((item)=>(
        <Notes
            key={item.id}
            note={item}
            notesItems={notesItems}
            setNotesItems={setNotesItems}
            onSaveServ={onSaveServ}
            dragObject={dragObject}
            setDragObject={setDragObject}
            delNote ={delNote }
        />
        ))}
       </div>
    );
  }
