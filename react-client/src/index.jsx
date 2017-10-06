import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PinsList from './components/PinsList.jsx';

import logo from './img/pinterest-logo.png';
import './style.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      index: 0,
      loadingData: false,
      emptyData: false,
      errorRetrievingData: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  getAllPins() {
    axios.get('/getAllPins').then(res => this.setState({pins: res.data}));
  }

  getMorePins() {
    this.setState({loadingData: true});
    
    axios.get(`getMorePins?index=${this.state.index}`)
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            pins: this.state.pins.concat(res.data),
            index: this.state.index += 8,
          });
          
        } else {
          this.setState({emptyData: true});
        }

        this.setState({
          loadingData: false,
          errorRetrievingData: false
        });
      })
      .catch(err => {
        console.error(err);

        this.setState({
          errorRetrievingData: true,
          loadingData: false
        });
      });
  }

  componentDidMount() {
    this.getMorePins();
  }

  handleScroll() {
    const list = document.querySelector('.list');

    const isScrolledToEnd = list.scrollTop >= (list.scrollHeight - list.offsetHeight);

    if (isScrolledToEnd && !this.state.loadingData && !this.state.emptyData) {
      this.getMorePins();
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} alt="Pins"/>
        </div>
        <div className="container" onScroll={this.handleScroll}>
          <PinsList pins={this.state.pins} />
        </div>

        {this.state.loadingData ? <div className="alerts loading"><i className="fa fa-spinner fa-spin"></i></div> : null}
        {/* {this.state.emptyData ? <div className="alerts empty">No more data!</div> : null} */}
        {this.state.errorRetrievingData ? <div className="alerts error">There was a problem.</div> : null}

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));