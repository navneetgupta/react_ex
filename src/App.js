import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

function App() {
    return ( < div className = 'App' >
        <
        Person name = "Max"
        age = "29" / >
        <
        Person name = "Manu"
        age = "12" > My Hobbies: Cycling < /Person> <
        Person name = "MaxManu"
        age = "31" / >
        <
        /div>
    );
}

export default App;