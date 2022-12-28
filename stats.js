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