import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="bottom_color_break"></div>
        <div className="title_box">
          <img src={require('./assets/images/gshift-logo-retro.png')} alt="Gshift retro logo" />
          <p className="fontTest">Entertainment System</p>
        </div>
      </div>
    );
  }
}

export default Footer;
