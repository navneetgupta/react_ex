import React from 'react';
import personcss from './Person.module.css';

const person = ( props ) => {
	return (
        <div className={personcss.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
