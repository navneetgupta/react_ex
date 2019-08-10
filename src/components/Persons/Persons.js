import React, { Component } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps..");
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] gettingSnapshots", prevProps, prevState);
    return { message: "snapshot" };
  }
  render() {
    let person = null;
    if (this.props.showPersons) {
      person = (
        <div>
          {this.props.persons.map((p, index) => {
            return (
              <ErrorBoundary key={p.id}>
                <Person
                  click={() => this.props.clicked(index)}
                  changed={event => this.props.changed(event, p.id)}
                  name={p.name}
                  age={p.age}
                />
              </ErrorBoundary>
            ); // we can pass index as unique element but it depends on list and will keep changing based on the list so its not a good choice
          })}
        </div>
      );
    }
    console.log("[Persons.js] rendering..");
    return <div>{person}</div>;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log("[Persons.js] snapshot: ", snapshot);
  }
}

export default Persons;
