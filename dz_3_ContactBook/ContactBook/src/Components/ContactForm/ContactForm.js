import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

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
        <input
          placeholder="Name"
          className="form--input"
          type="text"
          value={this.props.state.editedContact.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Surname"
          className="form--input"
          type="text"
          value={this.props.state.editedContact.surname}
          onChange={this.handleChange}
          name="surname"
        />
        <input
          placeholder="Mob. Phone"
          className="form--input"
          type="phone"
          value={this.props.state.editedContact.mphone}
          onChange={this.handleChange}
          name="mphone"
        />
        <input
          placeholder="Phone"
          className="form--input"
          type="phone"
          value={this.props.state.editedContact.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <input
          placeholder="E-mail"
          className="form--input"
          type="email"
          value={this.props.state.editedContact.email}
          onChange={this.handleChange}
          name="email"
        />
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
