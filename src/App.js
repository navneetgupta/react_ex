import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Assignment/ValidationComponent';
import CharComponent from './Assignment/CharComponent';

class App extends Component {
  state = {
    string: 'CurrentString',
	stringLength: 13
  }

  calculatelengthHandler = (event) => {
	  this.setState({
		  string: event.target.value,
		  stringLength: event.target.value ? event.target.value.length : 0
	  })
  }
  deleteHalndler = (index) => {
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

	let characters = null;

	if(this.state.string) {
		characters = this.state.string.map((c, index) => {
			return <CharComponent char={c} delete={this.deleteHalndler.bind(this, index)}>;
		});
	};

    return (
      <div className="App">
        <p>This is really working!</p>
		<input type="text" onChange={this.calculatelengthHandler} value={this.state.string} />
		<p>The Length of String is : {this.state.stringLength} </p>
		<ValidationComponent stringLength={this.state.stringLength} />
      </div>
    );
  }
}

export default App;
