import React   from "react";
import {useEffect}   from "react";
import {useState}   from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import contactService from "./contactbook-service";

import "./css/App.css";
import "./css/reset.css";

export default function App () {
  const contactDefault = {
    id: "",
    name: "",
    surname: "",
    
    phone: "",
  
  };

  const [contactListItems, setContactListItems] =  useState([])
  const [editedContact, setEditedContact] = useState(contactDefault)




  function onSave ()  {
    let contactList = [];

    if (editedContact.id === "") {
      addContact(contactList);
      clearForm(contactList);
    } else {
      editContact(contactList);
    }
  };

  function clearForm() {
    setEditedContact(contactDefault);
  }

  function addContact(contactList) {
    let contact = {};

    contactService.post("/", editedContact).then(({ data }) => {
      contact = data;

      contactList = [...contactListItems, contact];

      setContactListItems(contactList);
    });
  }

  function  editContact(contactList) {
    contactList = contactListItems.map((item) => {
      if (item.id !== editedContact.id) return item;
      return editedContact;
    });

    console.log(editedContact.id);
    contactService.put(
      "/" + editedContact.id,
      editedContact
    );

    setContactListItems(contactList);
  }

   function onDelete () {
    const contactList = contactListItems.filter(
      (item) => item.id !== editedContact.id
    );

    contactService.delete("/" + editedContact.id);

    setContactListItems(contactList);
    clearForm();
  };

useEffect(() => {
  contactService
  .get("/")
  .then(({ data }) => setContactListItems(data));
}, [])
   
   


  
    return (
      <div className="ContactBook">
        <ContactList
          contactListItems={contactListItems}
          setEditedContact={setEditedContact}
          clearForm={() => clearForm()}
        />
        <ContactForm
          onSave={onSave}
          onDelete={onDelete}
          setEditedContact={setEditedContact}
          editedContact={editedContact}
        /> 
      </div>
    );
  }
