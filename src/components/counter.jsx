import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <p>
          <h4>{this.props.id}</h4>
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={this.props.onDelete}
            className="btn  btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </p>
      </React.Fragment>
    );
  }
  handleIncrement() {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
