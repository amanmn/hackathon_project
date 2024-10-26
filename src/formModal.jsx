// src/FinanceNavbar.js
import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import './formModal.css';

const formModal = () => {
  return (
    <Navbar expand="lg" className="finance-navbar">
      <Container>
        <Navbar.Brand href="#">DharaFinance</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#loans">Loans</Nav.Link>
            <Nav.Link href="#insurance">Insurance</Nav.Link>
            <Nav.Link href="#investments">Investments</Nav.Link>
            <Nav.Link href="#financial-planning">Financial Planning</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default formModal;
