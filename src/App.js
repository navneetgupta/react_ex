import React, { Component } from 'react';
import './App.css';
import UserInput from './Assignment/UserInput';
import UserOutput from './Assignment/UserOutput';

class App extends Component {
  state = {
    username: "Navneet"
  }

  usernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    } )
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
    return (
      <div className="App">
	  	<h1>Please Enter Your Username:</h1>
		<UserInput
		changed={this.usernameHandler}
		username={this.state.username}
		/>
	  	<UserOutput
		name={this.state.username}
		salute = "Hi"
		p2="How are u Doing today??" />
		<UserOutput
		name={this.state.username}
		salute = "Hi"
		p2="How are u Doing today??" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
