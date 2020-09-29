import React, { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default class Contactlist extends Component {
  onClickAddBtn() {
    this.props.clearForm();
  }

  OnClickContact = (contact) => {
    this.props.setEditedContact(contact);
    console.log("тут точно");
  };
  render() {
    return (
      <div className="contact--list">
        {this.props.state.contactListItems.map((item) => (
          <ContactItem
            key={item.id}
            contactItem={item}
            OnClickContact={this.OnClickContact}
          />
        ))}

        <button className="contact--btn" onClick={() => this.onClickAddBtn()}>
          ADD
        </button>
      </div>
    );
  }
}
