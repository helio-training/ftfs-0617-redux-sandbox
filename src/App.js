import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Actions from './actions';

import Store from './stores';

console.log(Store.getState());

Store.subscribe(() => console.log(Store.getState()));
Store.dispatch(Actions.addToCart({ name: 'Emmet', price: 9.99}, 2));


class App extends Component {
  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
