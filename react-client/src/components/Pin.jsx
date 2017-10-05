import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Pin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {images, description} = this.props.pin;

    return (
      <div>
        <img src={images['236x'].url} alt={description}/>
      </div>
    );
  }
}

export default Pin;