import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 29 },
            { name: "Manu", age: 28 },
            { name: "MaxManu", age: 26 }
        ]
    };

    render() {
        return ( < div className = 'App' >
            <
            Person name = { this.state.persons[0].name } age = { this.state.persons[0].age }
            / > <
            Person name = { this.state.persons[1].name } age = { this.state.persons[1].age }
            / > <
            Person name = { this.state.persons[2].name } age = { this.state.persons[2].age }
            / > < /
            div >
        );
    }
}


export default App;