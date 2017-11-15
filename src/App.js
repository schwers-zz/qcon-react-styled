import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ClickableCounter,
  ScoreExample,
} from './components/CounterButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Intro to React and Styled-Components</h1>
        </header>
        <p className="App-intro">
          The root of this application is: <code>src/App.js</code>
        </p>
        <p className="App-intro">
          To start learning react, visit <code>src/components/CounterButton/index.js</code>
        </p>
        <ScoreExample />
        <br />
        <ClickableCounter />
      </div>
    );
  }
}

export default App;
