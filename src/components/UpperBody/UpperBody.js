import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './UpperBody.css';

import BodyCard from '../UpperBodyCard/BodyCard';

class UpperBody extends Component {
  render() {
    return (
      <div className="upperBody">
        <h1 className="upperBodyText">My Latest Projects</h1>
        <Row className="cardRow">
          <BodyCard className="card" />
          <BodyCard className="card" />
          <BodyCard className="card" />
        </Row>
        <Button outline color="secondary" size="lg" className="upperButton">
          More Projects
        </Button>
      </div>
    );
  }
}

export default UpperBody;
