import React, { Component } from 'react';
import MainPage from './MainPage';
import { Col, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Col sm={{ size: 8, offset: 2 }}>
          <MainPage />
        </Col>
      </Container>
    );
  }
}

export default App;
