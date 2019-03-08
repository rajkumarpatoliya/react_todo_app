import React, { Component } from 'react';
import './App.css';
import Todos  from "./components/Todos";

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: "take out the trash.",
        completed: false
      },
      {
        id: 2,
        title: "Cook breakfast.",
        completed: false
      },
      {
        id: 3,
        title: "Dinner with Girlfriend.",
        completed: false
      },
    ]
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
