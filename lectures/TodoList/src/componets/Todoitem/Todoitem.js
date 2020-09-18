import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
    return (

      <div className={"todo-item" + (this.props.item.isDone ? " done" : "")}
        onClick={() => this.props.onToggle(this.props.item.id)}
      >{this.props.item.title}
        <span calssName="delete-btn">X</span>
      </div>

    )
  }
}
