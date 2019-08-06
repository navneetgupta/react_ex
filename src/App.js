import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
	showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonViewHandler = () => {
	  const doesShow = this.state.showPersons;
	  this.setState( {showPersons : !doesShow});
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
		  person =
		  <div>
			  <Person
				name={this.state.persons[0].name}
				age={this.state.persons[0].age} />
			  <Person
				name={this.state.persons[1].name}
				age={this.state.persons[1].age}
				click={this.switchNameHandler.bind(this, 'Max!')}
				changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
			  <Person
				name={this.state.persons[2].name}
				age={this.state.persons[2].age} />
		  </div>
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
