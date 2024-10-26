// src/HeroSection.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import UserInputForm from './UserInputForm';
import './formModal.css';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="hero-section">
      <Container>
        <h1>Your Financial Journey Starts Here</h1>
        <p>Unlock personalized loan assessments and expert financial advice.</p>
        <Button 
          variant="primary" 
          size="lg" 
          className="cta-button" 
          onClick={handleShow}
          aria-haspopup="dialog"
          aria-expanded={showModal}
        >
          Get Started
        </Button>
        <UserInputForm show={showModal} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default HeroSection;
