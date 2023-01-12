import { Component, Fragment } from "react";

export default class Tarefas extends Component {
  constructor() {
    super();
    this.state = {
      tarefa: "",
      tarefas: [""],
    };

    this.handleChange = this.handleChange.bind(this);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h1>To-do List</h1>;
        <input onChange={this.handleChange} value={this.state.tarefa} />
        <button onClick={this.adicionarTarefa}>adicionar</button>
        <ul>
          {this.state.tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </Fragment>
    );
  }

  adicionarTarefa() {
    this.setState({
      tarefa: "",
      tarefas: [].concat(this.state.tarefas, this.state.tarefa),
    });
  }

  handleChange(event) {
    this.setState({ tarefa: event.target.volue });
  }
}
