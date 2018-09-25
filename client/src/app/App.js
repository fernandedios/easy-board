import '../index.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Board from '../board/Board';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Board} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
