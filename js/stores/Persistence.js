'use strict';

class Persistence {

  constructor() {
    this._prefix = 'todos';
    this._state = [ ];
  }

  get(storeName) {
    const state = window.localStorage.getItem(`${this._prefix}-${storeName}`);
    if (state) {
      try {
        this._state = JSON.parse(state);
      } catch (e) { }
    }
    return this._state;
  }

  set(storeName, state) {
    this._state = state;
    this._sync(storeName);
  }

  _sync(storeName) {
    window.localStorage.setItem(`${this._prefix}-${storeName}`, JSON.stringify(this._state));
  }
};

module.exports = Persistence;
