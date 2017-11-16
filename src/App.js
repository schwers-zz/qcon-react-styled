import React, { Component } from 'react';
import './App.css';

import {
  CounterButton,
  ScoreExample,
  YourFirstReactComponent
} from './components/CounterButton';

import ItemList from './components/ItemList';

import {
  ButtonsDemo,
  Demo,
  FlexDemo,
  YourFirstStyledComponents,
} from './components/StyledDemo';

import {
  CSSSharingDemo,
  NestedSelectorsDemo,
  ThemeDemo,
} from './components/AdvancedStyles';

// TODO - swap to styled-components

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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


        <div>
          <h2>
            React Overview
          </h2>
          To start learning <code>react</code>, visit <code>src/components/CounterButton/index.js</code>
        </div>
        <br />
        <ScoreExample />
        <br />
        <CounterButton />
        <br />
        <YourFirstReactComponent />
        <p className="App-intro">
          Now it's your turn! checkout <code>src/components/ItemList/index.jsx</code>
          <br />
          <br />
          <ItemList />
        </p>


        <div>
          <h2>
            Basics of <code>styled-components</code>
          </h2>
            To start learning <code>styled-components</code>, visit <code>src/components/StyledDemo/index.jsx</code>
        </div>
        <br />
        <Demo />
        <br />
        <br />
        <ButtonsDemo />
        <br />
        <br />
        <FlexDemo />
        <br />
        <br />
        <YourFirstStyledComponents />

        <div>
          <h2>
            Advanced <code>styled-components</code>
          </h2>
            Learn more about themeing and style-sharing in <code>styled-components</code>, visit <code>src/components/AdvancedStyles/index.jsx</code>
        </div>
        <br />
        <ThemeDemo />
        <br />
        <br />
        <CSSSharingDemo />
        <br />
        <br />
        <NestedSelectorsDemo />
      </div>
    );
  }
}

export default App;
