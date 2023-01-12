import React, { Component } from "react";
import "./App.css";

import Tarefas from "./components/Tarefas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tarefas />
      </div>
    );
  }
}

export default App;
