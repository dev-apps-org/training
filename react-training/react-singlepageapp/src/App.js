import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';
import HomeComponent from './HomeComponent';
import ManageProducts from './ManageProducts';

class App extends Component {
  
  render() {
    return (
      <div >
          <nav className="navbar navbar-inverse">
            <Link to="/" className="navbar-brand">
                  <img src="https://www01.wellsfargomedia.com/assets/images/css/template/homepage/homepage-logo-horz.svg"></img>
            </Link>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/signIn">Sign In Page</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up Page</Link>
              </li>
              <li>
                  <Link to="/manage">Manage Products</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/manage" exact component={ManageProducts} />
            <Route path="*" component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default App;
