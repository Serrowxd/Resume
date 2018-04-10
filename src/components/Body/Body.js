import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './Body.css';

class Body extends Component {
  render() {
    return (
      <div>
        <h1 className="bodyTitle">Check me out on Social Media!</h1>
        <SocialIcon url="https://twitter.com/Serrowxd" />
        <SocialIcon url="https://www.linkedin.com/in/kevin-jolley-26b600141/" />
        <SocialIcon url="https://github.com/Serrowxd" />
      </div>
      // Add Social Media links here - Twitter, LinkedIn, Github, etc..
    );
  }
}

export default Body;
