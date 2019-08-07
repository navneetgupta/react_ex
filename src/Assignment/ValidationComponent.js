import React from 'react';

const validationComponent = (props) => {
	if(props.stringLength < 5) {
		return (
			<div>Text too short!!</div>
		);
	} else if(props.stringLength > 10) {
		return (
			<div>Text too long!!</div>
		);
	} else {
		return (
			<div>Great!!</div>
		);
	}

}

export default validationComponent;
