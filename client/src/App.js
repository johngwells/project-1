import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioEngine from './components/AudioEngine';
import Keyboard from './components/Keyboard';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Make sure to turn DOWN <code>Your Speakers!!</code> before playing.
        </p>
        <AudioEngine />
        <Keyboard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
