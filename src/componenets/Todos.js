import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  render() {
    console.log("props", this.props.todos);

    return this.props.todos.map(todo => <TodoItem todo={todo} key={todo.id} />);
  }
}

export default Todos;
