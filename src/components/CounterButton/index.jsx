import React from 'react';

/**
 * Counter Button is a demonstration of some basic
 * features utilized by all React Applications:
 *   - Rendering HTML
 *   - Stateless Components
 *   - Class Components
 *   - Component State
 *   - Event Handling
 *
 * For this example, we'll make a basic component that
 * has a button, and display of the current count.
 * Clicking the button increases the count
 */

/**
 * Rendering and Stateless Components
 *
 * Writing HTML in React looks a like plain old HTML.
 * This is made possible by JSX Syntax, or JavaScript XML.
 *
 * JSX is made possibly by our compilation step, and
 * is available in Babel, TypeScript, and other Modern JavaScript
 * compilers.
 *
 * Let's make a basic `span` element we can use to display
 * a number label
 */

export const NumberLabel = props => (
  <span>
    { `${props.text}: ${ props.number.toLocaleString() }` }
  </span>
 );

 /**
  * This is highlighting some important features in React:
  *
  *  - JSX templates
  *    We create a span component. Note: this is not the
  *    the same as creating an HTML string. In React, our
  *    components generate instances of React Elements.
  *    React Elements are javascript objects representing
  *    the state of the HTML Document. React then manages
  *    updating your HTML based on what your component
  *    produces.
  *
  *  - props
  *    All React components receive a `props` object.
  *    This object is passed to your component functions
  *    by React, and it will collect all of the attributes,
  *    and children elements, of your component.
  *    Let's make this a little clearer with an example of rendering
  *    our new `NumberLabel` Component
  */

export const ScoreExample = props => (
  <div>
    High Scores:
    <br />
    <br />
    <div>
      <NumberLabel
        text={ "Player Two" }
        number={ 9001 }
      />
    </div>
    <div>
      <NumberLabel
        text={ "Player One" }
        number={ 3000 }
      />
    </div>
  </div>
);

/**
 * Let's make this a bit more interactive by making a
 * clickable counter that increases each time we click a button.
 * To do so, we need:
 *   - a way to keep track of the current count in our component
 *   - a way to detect a click on our UI element
 *   - a way to re-render our component when the count increases
 *
 * Luckily, React has all of this built in with component `state`,
 * and event Handlers:
 */

export class ClickableCounter extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Our component's only state is the current count.
     * `state` is a special React Component property.
     * React provides utilities for updating values of `state`,
     * that will automatically re-render and update the UI
     */
    this.state = {
      count: 0, // current count
    };
  }

  onButtonClick = () => {
    /**
     * When our counter button is clicked, we'd like to increase the
     * count by 1.
     */
    this.setState(currentState => ({
      count: currentState.count + 1,
    }));
    /**
     * `setState` can be used in one of two ways.
     * In this example, we're using the callback version:
     * we pass in a function that takes the current state,
     * and returns an object with any updates that should
     * be applied to state.
     *
     * class to `setState` happen asyncroously to minimize
     * incremental updates. So its important that we ustilize
     * the callback functionality to increase the _current_ count
     */
   }

  /**
   * React Class Components have a `render` function to produce their
   * JSX. This function is called after `constructor`, and
   * any time after react has finished applying your pending
   * `setState` calls
   */
  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={ this.onButtonClick }>
          +1
        </button>
        &nbsp;
        <NumberLabel
          text={ 'Count' }
          number={ count }
        />
      </div>
    );
  }
}