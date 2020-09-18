import React from "react";
import Todolist from "./componets/TodoList/Todolist";
import Todoform from "./componets/Todoform/Todoform";

import "./App.css";




export default class App extends React.Component {
  state = {
    todoListItems: [{
      id: 1,
      title: "Task 1",
      isDone: false
    }, {
      id: 2,
      title: "Task 2",
      isDone: true
    }, {
      id: 3,
      title: "Task 3",
      isDone: false
    }]
  };

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map(item => {
        if (item.id !== id) return item
        return { ...item, isDone: !item.isDone }
      })
    })

  }
  render() {

    return (
      <>
        <Todolist todos={this.state.todoListItems} onToggle={this.toggleTodo} />
        <Todoform />
      </>
    );
  }
}
