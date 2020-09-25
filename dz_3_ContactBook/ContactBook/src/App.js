import React from "react";
import Contactform from "./componets/Contactform/Contactform";
import Contactlist from "./componets/Contactlist/Contactlist";

import "./css/App.css";
import "./css/reset.css";

export default class App extends React.Component {
  state = {
    contactListItems: [
      // {
      //   id: 1,
      //   title: "Task 1",
      //   isDone: false,
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
  };

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, isDone: !item.isDone };
      }),
    });
  };
  addContact = (contact) => {
    const Contact = {
      id: Date.now(),
      name: contact.name,
      surname: contact.surname,
      mphone: contact.mphone,
      phone: contact.phone,
      email: contact.email,
    };
    this.setState({
      contactListItems: [...this.state.contactListItems, Contact],
    });

    // console.log(title);
  };

  delTodo = (e, id) => {
    this.setState({
      todoListItems: this.state.todoListItems.filter((item) => item.id !== id),
    });
    e.stopPropagation();
  };

  render() {
    return (
      <div className="ContactBook">
        <Contactlist />
        <Contactform />
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
