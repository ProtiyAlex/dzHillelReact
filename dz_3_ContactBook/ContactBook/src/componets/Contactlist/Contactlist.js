import React, { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default class Contactlist extends Component {
  onClickAddBtn() {
    this.props.editContact();

    console.log(this.props.state.editedContact);
  }
  OnClickContact(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="contact--list">
        {console.log(this.props.state.contactListItems)}
        {this.props.state.contactListItems.map((item) => (
          <ContactItem
            key={item.id}
            contactItem={item}
            onClick={() => this.OnClickContact(item.id)}
          />
        ))}

        <button className="contact--btn" onClick={() => this.onClickAddBtn()}>
          ADD
        </button>
        {/* {this.props.todos.map((item) => {
          return (
            <Todoitem
              key={item.id}
              item={item}
              onToggle={this.props.onToggle}
              delTodo={this.props.delTodo}
            />
          );
        })} */}
      </div>
    );
  }
}
