import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pin from './Pin.jsx';

class PinsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        {this.props.pins.map(pin => <Pin
          key={pin.id}
          pin={pin} />)}
      </div>
    );
  }
}

export default PinsList;