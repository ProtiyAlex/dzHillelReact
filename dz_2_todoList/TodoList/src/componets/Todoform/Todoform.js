import React, { Component } from "react";
import "./todoform.css";

export default class Todoform extends Component {
  render() {
    return (
      <div>
        <input className="form-input" type="text"></input>
        <button
          className="form-add-btn"
          onClick={() => this.props.addTodo("проба")}
        >
          ADD
        </button>
      </div>
    );
  }
}
