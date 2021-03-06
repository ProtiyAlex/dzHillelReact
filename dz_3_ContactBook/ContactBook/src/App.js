import React from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";

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

  constructor(props) {
    super(props);

    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : this.state;

    localStorage.setItem("items", JSON.stringify(itemsArray));
  }

  setContactList = (contactList) => {
    this.setState(
      {
        contactListItems: [...contactList],
      },
      () => localStorage.setItem("items", JSON.stringify(this.state))
    );
  };

  clearForm() {
    this.setEditedContact(this.contactDefault);
  }

  setEditedContact = (contactItem) => {
    this.setState({
      editedContact: { ...this.state.editedContact, ...contactItem },
    });
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("items"));

    this.setContactList(data.contactListItems);
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
          setContactList={this.setContactList}
          setEditedContact={this.setEditedContact}
          state={this.state}
          clearForm={() => this.clearForm()}
        />
      </div>
    );
  }
}
