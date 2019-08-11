import React, { Component, Fragment } from "react";
import personcss from "./Person.module.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <Fragment>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

// above we are returning array of elements seperated by comma.
export default Person;
