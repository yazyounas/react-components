

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
      const newColor = this.state.color == green ? yellow :green;
    this.setState({ color: newColor });
    
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
       <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
        Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
   document.getElementById('app')
);


import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }
  

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));













/*
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' };
}
	
  render() {
    return (
      <h1>
        I have the {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
*/