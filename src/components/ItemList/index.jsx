import React from 'react';
import PropTypes from 'prop-types';

/**
 * No javascript tutorial is complete without a todo list ;)
 *
 * This file introduces encapsulating functionality in react components.
 * A todo-list in its most basic-form:
 *  - lets you enter tasks
 *  - displays tasks
 *  - lets you cross off tasks
 *
 * The file `./ListInput` is provided for you -- it is a simple text input.
 * As a `prop`, it takes a function `onTodoAdded`.
 *
 * This should look very similar to using the `onClick` event handler in
 * `CounterButton`. One of the great things about react is that we can easily
 * set up clear boundaries of functionality. This component doesn't have
 * to worry about how the input is rendered, styled, or etc. It can interact
 * with the Input component just like regular element and pass in an event-
 * handler.
 *
 * This list component will then keep track of items, and if they're crossed off.
 *
 * Your job is to:
 *  - implement the ListItem Component -
 *    -  it should render the todo text
 *    -  it should have a button to toggle the crossed off state
 *    -  it should render todo text with strike through when its crossed off
 *        (a css classname "crossed-off-item" has been provided for now)
 *
 *  - implement toggling the crossed off state here in the ItemList
 *
 */

import ListInput from './ListInput';

/**
 * makeTodoItem: helper for tracking todo items
 * @argument - name - string - name of the todo
 * @returns - object {
 *   name: string;
 *   completed: boolean
 * }
 */
const makeTodoItem = name => ({
  name,
  completed: false,
});

// TODO fill this in. Take a look at `ItemList` first
// You can set className to 'crossed-off-item' to render strike-through text
const ListItem = ({ name, completed, onTodoToggled }) => (
  <div>
  </div>
);

/**
 * React PropTypes let you add documentation, and development
 * time warnings to your component. If you're interested in something
 * that works at compile time. Checkout Flow or TypeScript!
 */
ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  onTodoToggled: PropTypes.string.isRequired,
};

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        makeTodoItem('make list item component'),
      ],
    };
  }

  onTodoAdded = name => {
    this.setState(currentState => {
      return {
        items: currentState.items.concat([
          makeTodoItem(name),
        ]),
      };
    })
  }

  onTodoToggled = indexOfTodo => {
    this.setState(currentState => {
      // TODO: fill this in by updating by toggling `completed` on the todo
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h3> My Todos </h3>
        <ListInput onTodoAdded={ this.onTodoAdded } />
        <br />
        <div>
          { items.map(({ name, completed, onTodoToggled }, index) => (
              <ListItem
                name={ name }
                completed={ completed }
                onTodoToggled={ () => this.onTodoToggled(index) }
              />
            ))}
        </div>
      </div>
    );
  }
}
