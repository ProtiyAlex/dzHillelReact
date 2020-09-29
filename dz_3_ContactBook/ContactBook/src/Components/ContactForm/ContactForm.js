import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    input: [
      { name: "name", type: "text", id: 1 },
      { name: "surname", type: "text", id: 2 },
      { name: "mphone", type: "tel", id: 3 },
      { name: "phone", type: "tel", id: 4 },
      { name: "email", type: "email", id: 5 },
    ],
  };

  handleChange(e) {
    this.props.setEditedContact({ [e.target.name]: e.target.value });
  }
  onClickSaveBtn() {
    let contactList = [];
    if (this.props.state.editedContact.id === "") {
      this.addContact(contactList);
      this.props.clearForm();
    } else {
      this.editContact(contactList);
    }
  }

  addContact(contactList) {
    const contact = {
      ...this.props.state.editedContact,
      ...{ id: Date.now() },
    };
    contactList = [...this.props.state.contactListItems, contact];
    this.props.setContactList(contactList);
  }

  editContact(contactList) {
    contactList = this.props.state.contactListItems.map((item) => {
      if (item.id !== this.props.state.editedContact.id) return item;
      return this.props.state.editedContact;
    });
    this.props.setContactList(contactList);
  }

  onClickDelBtn() {
    const contactList = this.props.state.contactListItems.filter(
      (item) => item.id !== this.props.state.editedContact.id
    );
    this.props.setContactList(contactList);
    this.props.clearForm();
  }

  render() {
    return (
      <div className="contact--form">
        {this.state.input.map((item) => {
          console.log(item.name);
          return (
            <input
              key={item.id}
              placeholder={item.name}
              className="form--input"
              type={item.name}
              value={this.props.state.editedContact[item.name]}
              onChange={this.handleChange}
              name={item.name}
            />
          );
        })}

        <div className="form-btn">
          <button className="btn-save" onClick={() => this.onClickSaveBtn()}>
            SAVE
          </button>
          <button className="btn-delete" onClick={() => this.onClickDelBtn()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
