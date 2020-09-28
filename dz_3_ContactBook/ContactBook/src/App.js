import React from "react";
import ContactForm from "./componets/ContactForm/ContactForm";
import ContactList from "./componets/ContactList/ContactList";

import "./css/App.css";
import "./css/reset.css";

export default class App extends React.Component {
  state = {
    contactListItems: [],
    editedContact: {
      id: "",
      name: "",
      surname: "",
      mphone: "",
      phone: "",
      email: "",
    },
  };

  setContactList = (contactList) => {
    console.log("setcont");
    this.setState({
      contactListItems: [...contactList],
    });
  };

  clearForm() {
    const clean = this.state.editedContact;
    for (const key in clean) {
      clean[key] = "";
    }
    this.setEditedContact(clean);
  }

  setEditedContact = (contactItem) => {
    this.setState({
      editedContact: { ...this.state.editedContact, ...contactItem },
    });
  };

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, isDone: !item.isDone };
      }),
    });
  };

  // this.state.editedContact = {
  //   id: Date.now(),
  //   ...contactItem,
  //   // name: contact.name,
  //   // surname: contact.surname,
  //   // mphone: contact.mphone,
  //   // phone: contact.phone,
  //   // email: contact.email,
  // };
  // this.setState({
  //   contactListItems: [...this.state.contactListItems, Contact],
  // });

  //console.log(Contact);

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
          //state={this.state.contactListItems}
          clearForm={() => this.clearForm()}
        />
      </div>
    );
  }
}
