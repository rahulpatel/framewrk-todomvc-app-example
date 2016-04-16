'use strict';

import React from 'react';
import framework from 'framewrk';
import classNames from 'classnames';

import checkbox from './checkbox';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TodoItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { editing: false };
    this._store = framework.store('todos');
    this._actions = this._store.actions();
  }

  componentDidUpdate() {
    if (this.state.editing) {
      const node = ReactDOM.findDOMNode(this.refs.editField);
      node.focus();
    }
  }

  publishToggle(completed) {
    this._store.publish(this._actions.TOGGLE_COMPLETE, {
      id: this.props.id,
      completed: completed
    });
  }

  handleToggle(event) {
    this.publishToggle(event.target.checked);
  }

  handleRemove() {
    this._store.publish(this._actions.REMOVE, {
      id: this.props.id
    });
  }

  handleEdit(event) {
    this.setState({ editing: true, editValue: this.props.title });
    this.publishToggle(false);
  }

  handleChange(event) {
    if (this.state.editing) {
      this.setState({ editValue: event.target.value });
    }
  }

  handleKeyDown(event) {
    if (event.which === ENTER_KEY) {
      this.handleSave(event);
    }
    if (event.which === ESCAPE_KEY) {
      this.setState({ editing: false });
    }
  }

  handleSave(event) {
    let title = event.target.value.trim();
    if (title === '') return this.handleRemove();

    this._store.publish(this._actions.EDIT, {
      id: this.props.id,
      title
    });
    event.target.value = '';

    this.setState({ editing: false });
  }

  render() {
    const { title, completed } = this.props;

    const liClass = classNames({
      'editing': this.state.editing,
      'completed': completed
    });

    return (
      <li className={liClass}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={completed || false}
            onChange={this.handleToggle.bind(this)}
          />
          <label onDoubleClick={this.handleEdit.bind(this)}>{title}</label>
          <button className="destroy" onClick={this.handleRemove.bind(this)}></button>
        </div>

        <input
          className="edit"
          value={this.state.editValue}
          onBlur={this.handleSave.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </li>
    );
  }

}
export default TodoItem;
