import React, { Component } from "react";
import "./ContactItem.css";

export default class ContactItem extends Component {
  render() {
    return (
      <div className="contact--item">
        {console.log(this.props.contactItem.name)}
        {this.props.contactItem.name + " " + this.props.contactItem.surname}
        {/* {console.log(this.props.contactList[0].name)} */}
      </div>
    );
  }
}

/* {this.props.ContactItem.forEach((item) => (
          <div className="contact--item">{item.name}</div>
        ))} */
/* <div className="contact--item">dfgdfrtg</div> */
