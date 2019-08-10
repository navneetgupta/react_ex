import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state; // return updated state
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // or another way to copy
    // const person = Object.assign({}, this.state.persons[personIndex]);
    //
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  componentWillMount() {
    // NOTE : To be depreceated in library.
    console.log("[App.js] componentWillMount...");
  }
  componentDidMount() {
    // Here is the place where we could place the http calls.
    console.log("[App.js] componentDidMount..");
  }

  togglePersonViewHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonElement = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  toggleCockpitHandler = () => {
    const showCockpit = this.state.showCockpit;
    this.setState({ showCockpit: !showCockpit });
  };
  /*
  <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>

  Here we are adding paranthesis () at end of function name as opposed to passing function reference as props to child components. because here it would not be executed immediately due to arraow function wrapper.
  this can be inefficient => React can re-render certain things in ur app to offten
  */
  render() {
    console.log("[App.js] render..");
    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          persons={this.state.persons}
          styles={styles}
          toggle={this.togglePersonViewHandler}
        />
      );
    }
    return (
      <div className={styles.App}>
        <button onClick={this.toggleCockpitHandler}>Remove Cockpit</button>
        {cockpit}
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonElement}
          showPersons={this.state.showPersons}
          changed={this.nameChangedHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
