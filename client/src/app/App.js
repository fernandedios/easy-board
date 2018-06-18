import '../index.css';
import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
