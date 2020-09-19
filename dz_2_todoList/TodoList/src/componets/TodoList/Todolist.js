import React, { Component } from "react";
import Todoitem from "../Todoitem/Todoitem";
import "./todolist.css";

export default class Todolist extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((item) => {
          return (
            <Todoitem
              key={item.id}
              item={item}
              onToggle={this.props.onToggle}
              delTodo={this.props.delTodo}
            />
          );
        })}
      </div>
    );
  }
}
