import React, { Component } from 'react';
import './App.css';
import TopNav from './TopNav.js';
import Footer from './Footer.js';
import Stage from './Stage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Stage />
        <Footer />
      </div>
    );
  }
}

export default App;
