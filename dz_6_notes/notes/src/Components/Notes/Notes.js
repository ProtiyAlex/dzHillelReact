import React from "react";

import "./Notes.css";


export default function Notes   ({note, notesItems , setNotesItems, onSaveServ, dragObject, setDragObject,delNote, }){

   

function handleChange(e) {
     note.description=e.target.value
    setNotesItems([...notesItems]);
  }

function onBlurTextarea (){
   onSaveServ(note)
 }
 
function onMouseDownHeader (e) {

  dragObject={id:note.id,
              index:"notes--index",
              leftX: e.pageX-note.x,
              topY: e.pageY-note.y,
  }

   setDragObject({...dragObject})
 
}

 function onMouseMoveHeader(e) {

 if (!dragObject.id) return;
 
     note.x=e.pageX-dragObject.leftX;
     note.y=e.pageY-dragObject.topY;

   setNotesItems([...notesItems]);
   

    
}

function onMouseUpHeader() {
  
   dragObject = {};
   setDragObject({...dragObject})
   onSaveServ(note)
   
 }


 function styles () {
  const  height=150,  width=200;

    return {height: note.height>height ? note.height :height +"px",
             width: note.width>width ? note.width :width+"px",
             left: note.x+"px",
            top: note.y+"px"}
 }


 function onClickDelBnt () {

 
  delNote(note.id) 
 }




return (
      <div className={"notes--item"+" "+(dragObject.id===note.id ? dragObject.index :"")} style={styles()}>
            <div className="notes--item--header" onMouseMove={onMouseMoveHeader} onMouseDown={onMouseDownHeader} onMouseUp={onMouseUpHeader}>
               <button className="notes--item--delBtn" onClick={onClickDelBnt}>X</button>  
            </div>
            <div className="notes--item--title"  >
              <textarea rows="7" cols="20" name="text" value={note.description} onChange={handleChange} onBlur={onBlurTextarea}> 
              </textarea>
            </div>
      </div>
    );
  }

