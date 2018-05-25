import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FriendsComponent, ServiceDemoComponent} from "./Examples"

class App extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to React Training !! </h1>
        <div>
          <FriendsComponent />
          <hr />
          <ServiceDemoComponent />
        </div>
      </div>
    );
  }
}

export default App;
