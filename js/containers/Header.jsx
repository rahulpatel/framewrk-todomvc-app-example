'use strict';

import React from 'react';
import framework from 'framewrk';

const ENTER_KEY = 13;

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._store = framework.store('todos');
    this._actions = this._store.actions();
  }

  handleNewTodo(event) {
    let title = event.target.value.trim();
    if (title === '') return;

    if (event.which === ENTER_KEY) {
      this._store.publish(this._actions.ADD, { title });
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
          onKeyDown={this.handleNewTodo.bind(this)}
        />
      </div>
    );
  }

}
export default Header;
