import React, { Component } from 'react';

const userOutput = (props) => {
	return (
		<div>
			<p>{props.salute} {props.name}!!</p>
			<p>{props.p2}</p>
		</div>
	);
}

export default userOutput;
