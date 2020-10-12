import React from "react";
import "./ContactItem.css";

export default function ContactItem   ({ onClickContact, contactItem}){
 
    return (
      <div
        className="contact--item"
        onClick={() => onClickContact(contactItem)}
      >
        {contactItem.name + " " + contactItem.surname}
      </div>
    );
  }

