import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './formModal.css';
// import './formDown.css';

const FormDown = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        income: '',
        propertyValue: '',
        monthlyExpenses: '',
        existingLoans: '',
        creditScore: '',
        employmentStatus: '',
    });
    const [showResult, setShowResult] = useState(false);
    const [eligibilityMessage, setEligibilityMessage] = useState('');

    const checkEligibility = () => {
        const { income, monthlyExpenses, creditScore } = formData;
        const disposableIncome = income - (monthlyExpenses * 12); // Annual disposable income
        if (disposableIncome > 40000 && creditScore >= 700) {
            setEligibilityMessage('Congratulations! You are eligible for a loan.');
        } else {
            setEligibilityMessage('Unfortunately, you are not eligible for a loan at this time.');
        }
        setShowResult(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data Submitted:", formData);
        checkEligibility();
        // Optionally reset the form
        setFormData({
            name: '',
            email: '',
            income: '',
            propertyValue: '',
            monthlyExpenses: '',
            existingLoans: '',
            creditScore: '',
            employmentStatus: '',
        });
    };

    return (
        <div className="form-container">
            <h2>User Information</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formIncome">
                    <Form.Label>Annual Income</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPropertyValue">
                    <Form.Label>Property Value</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your property's estimated value"
                        name="propertyValue"
                        value={formData.propertyValue}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formMonthlyExpenses">
                    <Form.Label>Monthly Expenses</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your monthly expenses"
                        name="monthlyExpenses"
                        value={formData.monthlyExpenses}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formExistingLoans">
                    <Form.Label>Existing Loans</Form.Label>
                    <Form.Control
                            as="select"
                            name="existingLoans"
                            value={formData.existingLoans}
                            onChange={handleChange}
                        >
                            <option value="">Select...</option>
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="formCreditScore">
                    <Form.Label>Credit Score</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your credit score"
                        name="creditScore"
                        value={formData.creditScore}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formEmploymentStatus">
                    <Form.Label>Employment Status</Form.Label>
                    <Form.Control
                        as="select"
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <Modal show={showResult} onHide={() => setShowResult(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eligibility Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>{eligibilityMessage}</Modal.Body>
                <Modal.Footer className='formButton'>
                    <Button style={{width:'100%'}} variant="secondary" onClick={() => setShowResult(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FormDown;
