// src/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './formModal.css';

const Footer = ({ onLoanCalculatorClick }) => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="py-4">
          <Col md={3}>
            <h5>About DharaFinance</h5>
            <p>
              Empowering individuals to navigate their financial journeys with confidence. 
              Our mission is to provide personalized financial solutions that help you 
              achieve your goals, whether it's securing a loan, investing wisely, or 
              planning for the future.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#loans" className="text-light">Loans</a></li>
              <li><a href="#insurance" className="text-light">Insurance</a></li>
              <li><a href="#about" className="text-light">About Us</a></li>
              <li><a href="#contact" className="text-light">Contact Us</a></li>
              <li><a href="#faq" className="text-light">FAQs</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:support@dharafinance.com" className="text-light">support@dharafinance.com</a></p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Finance St, City, State, Zip</p>
          </Col>
          <Col md={3}>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#blog" className="text-light">Blog</a></li>
              <li><a onClick={onLoanCalculatorClick} className="text-light" style={{ cursor: 'pointer' }}>Loan Calculator</a></li> {/* Added Loan Calculator link */}
              <li><a href="#webinars" className="text-light">Webinars</a></li>
              <li><a href="#financial-tools" className="text-light">Financial Tools</a></li>
              <li><a href="#terms" className="text-light">Terms & Conditions</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="py-4">
          <Col md={4}>
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay updated with the latest news and offers:</p>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-2" required />
              <button type="submit" className="btn btn-warning">Subscribe</button>
            </form>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <p>Connect with us on social media for the latest updates:</p>
            <a href="#facebook" className="text-light">Facebook</a><br />
            <a href="#twitter" className="text-light">Twitter</a><br />
            <a href="#linkedin" className="text-light">LinkedIn</a><br />
            <a href="#instagram" className="text-light">Instagram</a>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <p>Read our policies:</p>
            <a href="#privacy-policy" className="text-light">Privacy Policy</a><br />
            <a href="#cookie-policy" className="text-light">Cookie Policy</a><br />
            <a href="#disclaimer" className="text-light">Disclaimer</a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-4">
            <p className="mb-0">© 2024 DharaFinance. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
