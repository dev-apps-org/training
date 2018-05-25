import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FriendsComponent, ShowListComponent} from "./Examples"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to React Training !! </h1>
        <div className="App-intro">
          <FriendsComponent />
        </div>
      </div>
    );
  }
}

export default App;
