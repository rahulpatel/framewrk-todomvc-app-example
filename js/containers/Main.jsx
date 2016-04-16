'use strict';

import React from 'react';
import framework from 'framewrk';

import checkbox from 'components/checkbox';
import TodosList from 'components/TodosList';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._store = framework.store('todos');
    this._actions = this._store.actions();
  }

  handleToggle(event) {
    this._store.publish(this._actions.TOGGLE_ALL_COMPLETE, {
      completed: event.target.checked
    });
  }

  render() {
    const todos = this._store.get();
    const allCompleted = todos.every((todo) => todo.completed);

    if (!todos.length) {
      return (<div></div>);
    }

    return (
      <div>
        <input
          type="checkbox"
          className="toggle-all"
          checked={allCompleted}
          onChange={this.handleToggle.bind(this)}
        />
      <label htmlFor="toggle-all">Mark all as complete</label>
        <TodosList filterType={this.props.filter} />
      </div>
    );
  }

}
export default Main;
