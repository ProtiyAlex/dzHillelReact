import React, { Component } from "react";
import "./todoform.css";

export default class Todoform extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  onClickAddBtn() {
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <input
          className="form-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="form-add-btn" onClick={() => this.onClickAddBtn()}>
          ADD
        </button>
      </div>
    );
  }
}
