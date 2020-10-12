import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default function Contactlist ({clearForm,setEditedContact,contactListItems}) {
  function onClickAddBtn() {
    clearForm();
  }

  function onClickContact (contact){
    setEditedContact(contact);
  };
  
    return (
      <div className="contact--list">
        {contactListItems.map((item) => (
          <ContactItem
            key={item.id}
            contactItem={item}
            onClickContact={onClickContact}
          />
        ))}

        <button className="contact--btn" onClick={() => onClickAddBtn()}>
          ADD
        </button>
      </div>
    );
  }

