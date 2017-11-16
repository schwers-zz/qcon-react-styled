import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  CounterButton,
  ScoreExample,
  YourFirstReactComponent
} from './components/CounterButton';

import ItemList from './components/ItemList';

// TODO - swawp to styled-components

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
          <br />
          <br />
          This is an interactive workshop! follow along in the files mentioned here.
          Feel free to edit them and experiment. Saving will automatically reload
          so you can experiment.
          <br />
          <br />
          Each file contains some high level notes and instructions that we'll review. Some will ask you to fill in components or add styles on your own. Your work will automatically reload and appear here.
        </p>
        <p className="App-intro">
          To start learning react, visit <code>src/components/CounterButton/index.js</code>
        </p>
        <ScoreExample />
        <br />
        <CounterButton />
        <br />
        <YourFirstReactComponent />
        <p className="App-intro">
          Now it your turn! checkout <code>src/components/ItemList/index.jsx</code>
          <br />
          <br />
          <ItemList />
        </p>
      </div>
    );
  }
}

export default App;
