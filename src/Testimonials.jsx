// src/Testimonials.js
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './formModal.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <Carousel>
          <Carousel.Item className="text-center mb-5">
            <p>"FinanceHub made my loan application so easy!"</p>
            <footer>- John D.</footer>
          </Carousel.Item>
          <Carousel.Item className="text-center mb-5">
            <p>"I received personalized advice that really helped me!"</p>
            <footer>- Sarah K.</footer>
          </Carousel.Item>
          <Carousel.Item className="text-center mb-5">
            <p>"The fast approvals saved me so much time!"</p>
            <footer>- Emily R.</footer>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Testimonials;
