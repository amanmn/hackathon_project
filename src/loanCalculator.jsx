// src/LoanCalculator.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoanCalculator = ({ onClose }) => {
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('');
    const [emi, setEmi] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);

    const calculateLoan = (e) => {
        e.preventDefault();
        const principal = parseFloat(amount);
        const interest = parseFloat(rate) / 100 / 12;
        const numberOfPayments = parseFloat(term) * 12;

        const x = Math.pow(1 + interest, numberOfPayments);
        const monthlyEmi = (principal * x * interest) / (x - 1);
        const total = monthlyEmi * numberOfPayments;

        setEmi(monthlyEmi.toFixed(2));
        setTotalPayment(total.toFixed(2));
    };

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Loan Calculator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={calculateLoan}>
                    <Form.Group controlId="amount">
                        <Form.Label>Loan Amount (in ₹)</Form.Label>
                        <Form.Control
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="rate">
                        <Form.Label>Interest Rate (in %)</Form.Label>
                        <Form.Control
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="term">
                        <Form.Label>Loan Term (in years)</Form.Label>
                        <Form.Control
                            type="number"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Calculate</Button>
                </Form>
                {emi && (
                    <div className="mt-3">
                        <h5>Results:</h5>
                        <p>EMI: ₹{emi}</p>
                        <p>Total Payment: ₹{totalPayment}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoanCalculator;
