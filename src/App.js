import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstSlide from './components/FirstSlide';
import Team from './components/Team';

class App extends Component {
  state = {
    scrollClass: '',
  };

  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(event));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll(event) {
    console.log(event);
    const scroll = event.target.scrollingElement.scrollTop;
    if (scroll < 30) {
      this.setState({
        scrollClass: '',
      });
    } else if (scroll >= 30) {
      this.setState({
        scrollClass: 'section1',
      });
    } else if (scroll >= 60) {
      this.setState({
        scrollClass: 'section2',
      });
    } else {
      this.setState({
        scrollClass: 'section3',
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className={this.state.scrollClass}>
          <FirstSlide />
          <Team />
        </main>
      </div>
    );
  }
}

export default App;
