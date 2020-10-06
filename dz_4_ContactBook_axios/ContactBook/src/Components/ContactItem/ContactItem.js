import React, { Component } from "react";
import "./ContactItem.css";

export default class ContactItem extends Component {
  render() {
    return (
      <div
        className="contact--item"
        onClick={() => this.props.onClickContact(this.props.contactItem)}
      >
        {this.props.contactItem.name + " " + this.props.contactItem.surname}
      </div>
    );
  }
}
