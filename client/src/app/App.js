import '../index.css';
import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Signup from '../signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Signup />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
