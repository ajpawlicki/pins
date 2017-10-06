import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pin from './Pin.jsx';

class PinsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list-container">
        {this.props.pins.map(pin => <Pin
          key={pin.id}
          pin={pin} />)}
      </ul>
    );
  }
}

export default PinsList;