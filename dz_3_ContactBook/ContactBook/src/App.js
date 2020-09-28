import React from "react";
import ContactForm from "./componets/ContactForm/ContactForm";
import ContactList from "./componets/ContactList/ContactList";

import "./css/App.css";
import "./css/reset.css";

export default class App extends React.Component {
  state = {
    contactListItems: [
      // {
      //   id: 1,
      //   name: "jhlkjh",
      //   surname: "",
      //   mphone: "",
      //   phone: "",
      //   email: "",
      // },
      // {
      //   id: 2,
      //   title: "Task 2",
      //   isDone: true,
      // },
      // {
      //   id: 3,
      //   title: "Task 3",
      //   isDone: false,
      // },
    ],
    editedContact: {
      name: "",
      surname: "",
      mphone: "",
      phone: "",
      email: "",
    },
  };

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, isDone: !item.isDone };
      }),
    });
  };
  editContact = (contactItem) => {
    console.log(contactItem);

    if (!contactItem) {
      console.log(this.state.editedContact);
      this.setState({
        contactListItems: [
          ...this.state.contactListItems,
          { id: Date.now(), ...this.state.editedContact },
        ],
      });
    } else {
      this.setState({
        editedContact: { ...this.state.editedContact, ...contactItem },
      });
    }
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

  delTodo = (e, id) => {
    this.setState({
      todoListItems: this.state.todoListItems.filter((item) => item.id !== id),
    });
    e.stopPropagation();
  };

  render() {
    return (
      <div className="ContactBook">
        <ContactList state={this.state} editContact={this.editContact} />
        <ContactForm
          state={this.state.editedContact}
          editContact={this.editContact}
        />
        {/* <Todolist
          todos={this.state.todoListItems}
          onToggle={this.toggleTodo}
          delTodo={this.delTodo}
        />
        <Todoform addTodo={this.addTodo} /> */}
      </div>
    );
  }
}
