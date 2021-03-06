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
    const docs = '//github/com/serrowxd';
    return (
      <Typist
        className="typistText-header"
        avgTypingDelay={40}
        startDelay={2000}
        onTypingDone={this.onHeaderTyped}
      >
        <p className="type1">Kevin Jolley</p>
        {/* <p className="type2"> Skills</p> */}
        <Container className="typeRow">
          <Row>
            <Col sm="4">
              <h1 className="type3"> Languages </h1>
              <ul className="type4">
                <li> JavaScript </li>
                <li> HTML5 </li>
                <li> CSS/LESS/SCSS </li>
              </ul>
            </Col>
            <Col sm="4">
              <h1 className="type3"> Front-End </h1>
              <ul className="type4">
                <li> React.js </li>
                <li> Bootstrap </li>
              </ul>
            </Col>
            <Col sm="4">
              <h1 className="type3"> Back-End </h1>
              <ul className="type4">
                <li> Node.js </li>
                <li> MongoDB </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <p className="checkMe">Let's build something together</p>
      </Typist>
    );
  }
}

export default TypistText;
