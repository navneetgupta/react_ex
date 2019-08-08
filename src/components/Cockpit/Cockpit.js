import React from 'react';

const cockpit = (props) => {
	const csscl = [];
	if(props.persons.length <=2) {
		csscl.push(props.styles.red);
	}

	if(props.persons.length <=1) {
		csscl.push(props.styles.bold);
	}
	return (
		<div>
			<h1>Hi, I'm a React App</h1>
			<p className={csscl.join(' ')}>This is really working!</p>
			<button
				style={props.styles.style}
				onClick={props.toggle}>Toggle Person View</button>
		</div>
	)
}

export default cockpit;
