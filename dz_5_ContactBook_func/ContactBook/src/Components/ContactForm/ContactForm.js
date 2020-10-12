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
      { name: "phone", type: "tel", id: 3 },

    ],
  };





  handleChange(e) {
    
      this.props.setEditedContact({...this.props.editedContact,...{ [e.target.name]: e.target.value }});
  }
  onClickSaveBtn() {
    
    this.props.onSave();
  }

  onClickDelBtn() {
    this.props.onDelete();
  }

  render() {
    return (
      <div className="contact--form">
        {this.state.input.map((item) => {
          return (
            <input
              key={item.id}
              placeholder={item.name}
              className="form--input"
              type={item.type}
              value={this.props.editedContact[item.name]}
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
