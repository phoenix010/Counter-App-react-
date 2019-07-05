import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Counters from "./components/counters";
import "./App.css";
const lodash = require("lodash");
let uniqid = require("uniqid");
class App extends Component {
  state = {
    counters: [
      { id: uniqid(), value: 0 },
      { id: uniqid(), value: 0 },
      { id: uniqid(), value: 0 },
      { id: uniqid(), value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    this.initialCounters = lodash.cloneDeep(this.state.counters);
  }

  handleDefault = () => {
    const counters = this.initialCounters;
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleAddition = counter => {
    // console.log("Adding new components");
    const counters = [...this.state.counters];
    console.log(counters);
    // console.log("The old length is: ", counters.length);
    const index = counters.length;
    counters[index] = { ...counter };
    // console.log("The new length is: ", counters.length);
    counters[index].value = 0;
    counters[index].id = uniqid();
    // console.log("The ID is", counters[index].id);
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalValues={this.state.counters
            .map(c => c.value)
            .reduce(function(acc, curr) {
              return acc + curr;
            })}
        />

        <Counters
          counters={this.state.counters}
          onDefault={this.handleDefault}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAddition}
        />
      </React.Fragment>
    );
  }
}

export default App;
