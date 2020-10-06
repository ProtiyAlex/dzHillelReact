import React from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import contactService from "./contactbook-service";

import "./css/App.css";
import "./css/reset.css";

export default class App extends React.Component {
  contactDefault = {
    id: "",
    name: "",
    surname: "",
    mphone: "",
    phone: "",
    email: "",
  };

  state = {
    contactListItems: [],
    editedContact: this.contactDefault,
  };

  setContactList = (contactList) => {
    this.setState({
      contactListItems: [...contactList],
    });
  };

  clearForm() {
    this.setEditedContact(this.contactDefault);
  }

  setEditedContact = (contactItem) => {
    this.setState({
      editedContact: { ...this.state.editedContact, ...contactItem },
    });
  };

  onSave = () => {
    let contactList = [];

    if (this.state.editedContact.id === "") {
      this.addContact(contactList);
      this.clearForm(contactList);
    } else {
      this.editContact(contactList);
    }
  };

  addContact(contactList) {
    let contact = {};

    contactService.post("/", this.state.editedContact).then(({ data }) => {
      contact = data;

      contactList = [...this.state.contactListItems, contact];

      this.setContactList(contactList);
    });
  }

  editContact(contactList) {
    contactList = this.state.contactListItems.map((item) => {
      if (item.id !== this.state.editedContact.id) return item;
      return this.state.editedContact;
    });
    contactService.put(
      "/" + this.state.editedContact.id,
      this.state.editedContact
    );

    this.setContactList(contactList);
  }

  onDelete = () => {
    const contactList = this.state.contactListItems.filter(
      (item) => item.id !== this.state.editedContact.id
    );

    contactService.delete("/" + this.state.editedContact.id);

    this.setContactList(contactList);
    this.clearForm();
  };

  componentDidMount() {
    contactService
      .get("/")
      .then(({ data }) => this.setState({ contactListItems: data }));
  }

  render() {
    return (
      <div className="ContactBook">
        <ContactList
          state={this.state}
          setEditedContact={this.setEditedContact}
          clearForm={() => this.clearForm()}
        />
        <ContactForm
          onSave={this.onSave}
          onDelete={this.onDelete}
          setEditedContact={this.setEditedContact}
          state={this.state}
        />
      </div>
    );
  }
}
