import React from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import { Container, Row, Col } from 'reactstrap';

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
      <Typist>
        <div
          className="typistText-header"
          avgTypingDelay={80}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          <p className="type1">Serrow d-(OvO")z</p>
          <p className="type2"> Skills ヾ(｡^ω^｡)ノ</p>
          <Container className="typeRow">
            <Row>
              <Col>
                <h2 className="type3"> Languages </h2>
                <ul className="type4">
                  <li> JavaScript </li>
                  <li> HTML5 </li>
                  <li> CSS/LESS/SCSS </li>
                </ul>
              </Col>
              <Col>
                <h2 className="type3"> Front-End </h2>
                <ul className="type4">
                  <li> React.js </li>
                  <li> Bootstrap </li>
                </ul>
              </Col>
              <Col>
                <h2 className="type3"> Back-End </h2>
                <ul className="type4">
                  <li> Node.js </li>
                  <li> MongoDB </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <p className="checkMe"> Check me out! </p>
        </div>
      </Typist>
    );
  }
}

export default TypistText;
