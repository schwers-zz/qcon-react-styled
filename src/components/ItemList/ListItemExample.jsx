import React from 'react';

/**
// Example `onTodoToggled` implementation
const items = [ ...currentState.items ];
const currentItem = items[indexOfTodo];
items[indexOfTodo] = {
  ...currentItem,
  completed: !currentItem.completed,
};

return { items };
*/

export const SimpleListItem = ({ name, completed, onTodoToggled }) => (
  <div className={ completed ? 'crossed-off-item' : '' } onClick={ onTodoToggled }>
    { name }
  </div>
);

export class SmarterListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      completed: props.completed,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldComponentUpdate(nextProps)) {
      this.setState({
        name: nextProps.name,
        completed: nextProps.completed,
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.name !== this.state.name ||
      nextProps.completed !== this.state.completed;
  }

  render() {
    const { name, completed } = this.state;
    const { onTodoToggled } = this.props;

    return (
      <SimpleListItem
        name={ name }
        completed={ completed }
        onTodoToggled={ onTodoToggled }
      />
    );
  }
}