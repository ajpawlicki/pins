import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Pins
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));