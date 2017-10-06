import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Pin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {images, description, link} = this.props.pin;

    return (
      <div className="pin-container">
        <a href={link}>
          <div className="pin">
            <img src={images['236x'].url} alt={description}/>
            <div className="description">{description}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default Pin;