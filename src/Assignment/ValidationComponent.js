import React from 'react';

const validationComponent = (props) => {
	let validationMessage = "Text Long Enough"; // Here it cound be JSX also same as class Component
	if(props.stringLength < 5) {
		validationMessage = "Text too short!!"; // Here it cound be JSX also same as class Component
	}
	return (
		<div>{validationMessage}</div>
	);
}

export default validationComponent;
