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
        {this.props.loadingData ? <div className="loading">Loading...</div> : null}
        {this.props.emptyData ? <div>No more data!</div> : null}
        {this.props.errorRetrievingData ? <div>There was a problem.</div> : null}
      </div>
    );
  }
}

export default PinsList;