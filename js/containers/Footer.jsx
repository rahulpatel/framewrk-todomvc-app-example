'use strict';

import React from 'react';
import framework from 'framewrk';

class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._store = framework.store('todos');
    this._actions = this._store.actions();
  }

  handleClearCompleted(event) {
    this._store.publish(this._actions.CLEAR_COMPLETED);
  }

  render() {
    const todos = this._store.get();

    const activeCount = todos.reduce((count, todo) => todo.completed ? count : count + 1, 0);
    const completedCount = todos.length - activeCount;

    if (!todos.length) {
      return (<div></div>);
    }

    return (
      <div>
        <span className="todo-count"><strong>{activeCount}</strong> item{activeCount !== 1 ? 's' : ''} left</span>
        <ul className="filters">
          <li>
            <a className={this.props.filter === 'SHOW_ALL' ? 'selected' : ''} href="#/">All</a>
          </li>
          <li>
            <a className={this.props.filter === 'SHOW_ACTIVE' ? 'selected' : ''} href="#/active">Active</a>
          </li>
          <li>
            <a className={this.props.filter === 'SHOW_COMPLETED' ? 'selected' : ''} href="#/completed">Completed</a>
          </li>
        </ul>
        {
          completedCount
          ? (
              <button
                className="clear-completed"
                onClick={this.handleClearCompleted.bind(this)}
              >
                Clear completed
              </button>
            )
          : ''
        }
      </div>
    );
  }

}
export default Footer;
