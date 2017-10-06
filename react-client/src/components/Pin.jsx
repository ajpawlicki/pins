import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Pin extends Component {
  constructor(props) {
    super(props);

    this.numOfWords = 9;

    this.state = {
      imgFinishedLoading: false
    }

    this.displayPin = this.displayPin.bind(this);
  }

  displayPin() {
    this.setState({imgFinishedLoading: true});
    
    this.refs.pin.classList.remove('hidden');
  }

  shortenDescription(text) {
    const shortened = text.split(' ').slice(0, this.numOfWords).join(' ');
    return shortened.length < text.length ? shortened.concat('...') : text;
  }

  render() {
    const {images, description, link} = this.props.pin;

    return (
      <li ref="pin" className="pin-container hidden">
        <a href={link} target="_blank">
          <div className="pin">
            <img src={images['236x'].url} alt={description} onLoad={this.displayPin}/>
            <div className="description">
              {this.state.imgFinishedLoading ? this.shortenDescription(description) : null}
            </div>
          </div>
        </a>
      </li>
    );
  }
}

export default Pin;