import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstSlide from './components/FirstSlide';
import Team from './components/Team';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <main>
          <FirstSlide />
          <Team />
        </main>
      </div>
    );
  }
}

export default App;
