import React from "react";
import Todolist from "./componets/TodoList/Todolist";
import Todoform from "./componets/Todoform/Todoform";

import "./css/App.css";
import "./css/reset.css";

export default class App extends React.Component {
  state = {
    todoListItems: [
      {
        id: 1,
        title: "Task 1",
        isDone: false,
      },
      {
        id: 2,
        title: "Task 2",
        isDone: true,
      },
      {
        id: 3,
        title: "Task 3",
        isDone: false,
      },
    ],
  };

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, isDone: !item.isDone };
      }),
    });
  };
  addTodo = (title) => {
    if (title && title.length > 0) {
      const todo = {
        id: Date.now(),
        title: title,
        isDone: false,
      };
      this.setState({ todoListItems: [...this.state.todoListItems, todo] });
    } else {
      alert(`Ничего не введено`);
    }

    // console.log(title);
  };

  delTodo = (e, id) => {
    this.setState({
      todoListItems: this.state.todoListItems.filter((item) => {
        return item.id !== id;
      }),
    });
    e.stopPropagation();
  };

  render() {
    return (
      <div className="todo">
        <Todolist
          todos={this.state.todoListItems}
          onToggle={this.toggleTodo}
          delTodo={this.delTodo}
        />
        <Todoform addTodo={this.addTodo} />
      </div>
    );
  }
}
