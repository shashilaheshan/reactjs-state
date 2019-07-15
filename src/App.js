import React, { Component } from "react";
import Todos from "./componenets/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      { title: "vue js crash", id: 1, completed: false },
      { title: "React js crash", id: 2, completed: false },
      { title: "Laravel js crash", id: 3, completed: false },
      { title: "Techz js crash", id: 4, completed: false }
    ]
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
