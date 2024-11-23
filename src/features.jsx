import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './formModal.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Features = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Why Choose DharaFinance?</h2>
      <Row>
        <Col md={4} className="text-center">
          <h3>Fast Approvals</h3>
          <p>Get your loan approved quickly with our streamlined process.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Personalized Solutions</h3>
          <p>We tailor loan offers to match your financial profile.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Expert Support</h3>
          <p>Our team is here to help you every step of the way.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
