import React from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import './TypistText.css';

class TypistText extends React.Component {
  state = {
    renderMsg: false,
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    return (
      <div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={800}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          Serrow (OvO")
        </Typist>
      </div>
    );
  }
}

export default TypistText;
