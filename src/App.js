import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
	showPersons: false
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
	  const persons = [...this.state.persons]
	  persons[personIndex] = person;
	  this.setState({
	      persons: persons
	  })
  }

  togglePersonViewHandler = () => {
	  const doesShow = this.state.showPersons;
	  this.setState( {showPersons : !doesShow});
  }

  deletePersonElement = (index) => {
	  const persons = [...this.state.persons];
	  persons.splice(index, 1);
	  this.setState({persons: persons})
  }
  /*
  <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>

  Here we are adding paranthesis () at end of function name as opposed to passing function reference as props to child components. because here it would not be executed immediately due to arraow function wrapper.
  this can be inefficient => React can re-render certain things in ur app to offten
  */
  render () {
	  const style = {
		  backgroundColor: 'white',
		  font: 'inherit',
		  border: '1px solid blue',
		  padding: '8px',
		  cursor: 'pointer'
	  };
	  let person = null;
	  if(this.state.showPersons) {
		  person = (
			  <div>
			  	{this.state.persons.map((p,index) => {
					return <Person
					click={this.deletePersonElement.bind(this, index)}
					changed={(event) => this.nameChangedHandler(event, p.id)}
	  				name={p.name}
	  				age={p.age}
					key={p.id} />  // we can pass index as unique element but it depends on list and will keep changing based on the list so its not a good choice
				})}
			  </div>
		  );
	  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
			style={style}
			onClick={this.togglePersonViewHandler}>Toggle Person View</button>
		{person}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
