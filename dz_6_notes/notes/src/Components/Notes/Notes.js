import React from "react";

import "./Notes.css";


export default function Notes   ({notes, notesItems , setNotesItems, onSaveServ, dragObject, setDragObject,delNote }){

   

function handleChange(e) {
     notes.description=e.target.value
    setNotesItems([...notesItems]);
  }

function onBlurTextarea (){
   onSaveServ(notes)
 }
 
function onMouseDownHeader (e) {

  dragObject=notes

   dragObject.downX = e.pageX-notes.x;
   dragObject.downY = e.pageY-notes.y;

   setDragObject({...dragObject})
 
}

 function onMouseMoveHeader(e) {

 if (!dragObject.id) return;
 
     notes.x=e.pageX-dragObject.downX;
     notes.y=e.pageY-dragObject.downY;

   setNotesItems([...notesItems]);
   

    
}

function onMouseUpHeader() {
  
   dragObject.id = "";
   onSaveServ(notes)
 }


 function styles () {
  const  height=150,  width=200;

    return {height: notes.height>height ? notes.height :height +"px",
             width: notes.width>width ? notes.width :width+"px",
             left: notes.x+"px",
            top: notes.y+"px"}
 }


 function onClickDelBnt (e) {

 // e.stopPropagation()
  delNote(notes.id) 
 }




return (
      <div className="notes--item" style={styles()}>
            <div className="notes--item--header" onMouseMove={onMouseMoveHeader} onMouseDown={onMouseDownHeader} onMouseUp={onMouseUpHeader}>
               <button className="notes--item--delBtn" onClick={onClickDelBnt}>X</button>  
            </div>
            <div className="notes--item--title"  >
              <textarea rows="7" cols="20" name={notes.id} value={notes.description} onChange={handleChange} onBlur={onBlurTextarea}> 
              </textarea>
            </div>
      </div>
    );
  }

