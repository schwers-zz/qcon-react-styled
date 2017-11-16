import React from 'react';

// PropTypes lets us declare the expected types
// for properties passed into our component.
// In development, this will result in warnings in the console.
import PropTypes from 'prop-types';


/**
 * This is an example of the controlled input pattern in React.
 * You can learn more about it in the React docs: https://reactjs.org/docs/forms.html
 */

export default class ListInput extends React.Component {
  static propTypes = {
    /**
     * onTodoAdded - required prop
     * @argument: (todoName: string)
     * @return: void
     *
     * note: required props result in warnings in the developer
     * console when your application is in development mode
     */
    onTodoAdded: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      todoName: '',
    };
  }

  onInputChange = event => {
    this.setState({
      todoName: event.target.value,
    });
  }

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleAddTodo();
    }
  }

  handleAddTodo = () => {
    this.props.onTodoAdded(this.state.todoName.trim());
    this.setState({ todoName: '' });
  }

  render() {
    const { todoName } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder={ "New todo" }
          value={ todoName }
          onChange={ this.onInputChange }
          onKeyPress={ this.onKeyPress }
        />
        <button onClick={ this.handleAddTodo }>
          Add
        </button>
      </div>
    )

  }
}