import React, { Component } from "react";
//import Todoitem from "../Todoitem/Todoitem";
import "./Contactlist.css";

export default class Contactlist extends Component {
  render() {
    return (
      <div className="contact--list">
        <p className="contact--item">contact--form</p>
        <button className="contact--btn">ADD</button>
        {/* {this.props.todos.map((item) => {
          return (
            <Todoitem
              key={item.id}
              item={item}
              onToggle={this.props.onToggle}
              delTodo={this.props.delTodo}
            />
          );
        })} */}
      </div>
    );
  }
}
