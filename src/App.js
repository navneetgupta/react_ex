import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

const App = prps => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 29 },
            { name: "Manu", age: 28 },
            { name: "MaxManu", age: 26 }
        ],
		someOtherState: 'Other state'
    });
	const clickMeHandler = () => {
		console.log('I\'was Clicked!!');
		setPersonsState({
			persons: [
				{ name: "Maximillian", age: 29 },
				{ name: "Manu", age: 28 },
				{ name: "MaxManu", age: 26 }
		]});
	}
    return (
		<div className = 'App'>
			<button onClick = {clickMeHandler}>Click Me!!</button>
            <Person name = { personsState.persons[0].name } age = { personsState.persons[0].age }/>
			<Person name = { personsState.persons[1].name } age = { personsState.persons[1].age }/>
			<Person name = { personsState.persons[2].name } age = { personsState.persons[2].age }/>
		</div >
    );
}
export default App;
