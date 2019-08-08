import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
	let person = null;
	if(props.showPersons) {
		person = (
			<div>
			  {props.persons.map((p,index) => {
				  return <ErrorBoundary key={p.id} ><Person
				  click={() => props.clicked(index)}
				  changed={(event) => props.changed(event, p.id)}
				  name={p.name}
				  age={p.age}
				  /></ErrorBoundary>  // we can pass index as unique element but it depends on list and will keep changing based on the list so its not a good choice
			  })}
			</div>
		);
	}
	return (<div>{person}</div>);
}

export default persons;
