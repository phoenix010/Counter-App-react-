import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className=" navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            "Total Number of Items: "{this.props.totalValues}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
