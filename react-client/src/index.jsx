import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PinsList from './components/PinsList.jsx';

// import './style.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      index: 0
    }
  }

  getAllPins() {
    axios.get('/getAllPins').then(res => this.setState({pins: res.data}));
  }

  componentDidMount() {
    this.getAllPins();
  }

  render() {
    console.log('pins:', this.state.pins);

    return (
      <div>
        <b>Pins</b>
        <PinsList pins={this.state.pins}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));