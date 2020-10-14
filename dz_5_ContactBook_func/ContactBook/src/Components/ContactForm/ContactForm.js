import React from "react";
import "./ContactForm.css";

export default function ContactForm ({editedContact,setEditedContact,onDelete,onSave}) {


 function handleChange(e) {
    
      setEditedContact({...editedContact,...{ [e.target.name]: e.target.value }});
  }
  function onClickSaveBtn() {
       onSave();
  }

  function onClickDelBtn() {
    onDelete();
  }


    return (
      <div className="contact--form">
            <input
              placeholder="Name"
              className="form--input"
              type="text"
              value={editedContact.name}
              onChange={handleChange}
              name="name"
            />
            <input
              placeholder="Surname"
              className="form--input"
              type="text"
              value={editedContact.surname}
              onChange={handleChange}
              name="surname"
            />
            <input
              placeholder="Phone"
              className="form--input"
              type="tel"
              value={editedContact.phone}
              onChange={handleChange}
              name="Phone"
            />
          
  

        <div className="form-btn">
          <button className="btn-save" onClick={() => onClickSaveBtn()}>
            SAVE
          </button>
          <button className="btn-delete" onClick={() => onClickDelBtn()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
