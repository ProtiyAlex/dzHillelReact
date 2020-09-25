import React, { Component } from "react";
import "./Contactform.css";

export default class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [
        { name: "" },
        { surname: "" },
        { mphone: "" },
        { phone: "" },
        { email: "" },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }
  onClickSaveBtn() {
    this.props.addContact(this.state.input);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="contact--form">
        <input
          placeholder="Name"
          className="form--input"
          type="text"
          value={this.state.input.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Surname"
          className="form--input"
          type="text"
          value={this.state.input.surname}
          onChange={this.handleChange}
          name="surname"
        />
        <input
          placeholder="Mob. Phone"
          className="form--input"
          type="phone"
          value={this.state.input.mphone}
          onChange={this.handleChange}
          name="mphone"
        />
        <input
          placeholder="Phone"
          className="form--input"
          type="phone"
          value={this.state.input.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <input
          placeholder="E-mail"
          className="form--input"
          type="email"
          value={this.state.input.email}
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
