import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PinsList from './components/PinsList.jsx';

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

        this.setState({errorRetrievingData: true});
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
    // console.log('pins:', this.state.pins);
    // console.log('index:', this.state.index);

    return (
      <div>
        <div className="header"><h1>Pins</h1></div>
        <div className="container" onScroll={this.handleScroll}>
          <PinsList pins={this.state.pins}
            loadingData={this.state.loadingData}
            emptyData={this.state.emptyData}
            errorRetrievingData={this.state.errorRetrievingData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));