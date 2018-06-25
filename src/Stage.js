import React, { Component } from 'react';
import './Stage.css';
import NameDisplay from './NameDisplay.js';

class Stage extends Component {
  render() {
    return (
      <div className="Stage">
        <NameDisplay />
      </div>
    );
  }
}

export default Stage;
