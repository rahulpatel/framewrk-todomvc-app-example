'use strict';

import React from 'react';
import framework from 'framewrk';

import TodoItem from './TodoItem';

class TodosList extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._store = framework.store('todos');
  }

  render() {
    const todos = this._store.get().filter((todo) => {
      switch (this.props.filterType) {
        case 'SHOW_ACTIVE':
          return !todo.completed;
        case 'SHOW_COMPLETED':
          return todo.completed;
        default:
          return true;
      }
    });

    return (
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }

}
export default TodosList;
