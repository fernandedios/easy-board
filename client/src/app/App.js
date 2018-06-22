import '../index.css';
import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Login from '../login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Login />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
