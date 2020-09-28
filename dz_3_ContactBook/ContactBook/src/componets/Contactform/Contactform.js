import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   input: {
    //     name: "",
    //     surname: "",
    //     mphone: "",
    //     phone: "",
    //     email: "",
    //   },
    // };

    this.handleChange = this.handleChange.bind(this);

    // }
  }

  handleChange(e) {
    this.props.setEditedContact({ [e.target.name]: e.target.value });
  }
  onClickSaveBtn(e) {
    console.log("гте-то тут ");
    let contactList = [];
    if (this.props.state.editedContact.id === "") {
      this.addContact(contactList);
      this.props.clearForm();
    } else {
      this.editContact(contactList);
    }
    e.preventDefault();
  }

  addContact(contactList) {
    const contact = {
      ...this.props.state.editedContact,
      ...{ id: Date.now() },
    };
    contactList = [...this.props.state.contactListItems, contact];
    console.log(contactList);
    this.props.setContactList(contactList);
  }

  editContact(contactList) {
    contactList = this.props.state.contactListItems.map((item) => {
      if (item.id !== this.props.state.editedContact.id) return item;
      return this.props.state.editedContact;
    });
    this.props.setContactList(contactList);
    console.log("1");
  }

  onClickDelBtn() {
    const contactList = this.props.state.contactListItems.filter(
      (item) => item.id !== this.props.state.editedContact.id
    );
    // console.log(contactList);
    this.props.setContactList(contactList);
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
          <button className="btn-save" onClick={(e) => this.onClickSaveBtn(e)}>
            SAVE
          </button>
          <button className="btn-delete" onClick={() => this.onClickDelBtn()}>
            Delete
          </button>
        </div>

        {/* <input
          className="form-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="form-add-btn" onClick={() => this.onClickAddBtn()}>
          ADD
        </button> */}
      </div>
    );
  }
}
