import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './formModal.css';
import './formDown.css';

const FormDown = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        income: '',
        propertyValue: '',
        interestIncome: '',
        monthlyExpenses: '',
        existingLoans: '',
        creditScore: '',
        employmentStatus: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data Submitted:", formData);
        // Optionally reset the form
        setFormData({
            name: '',
            email: '',
            income: '',
            propertyValue: '',
            interestIncome: '',
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
                <Form.Group controlId="formInterestIncome">
                    <Form.Label>Interest Income</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your interest income"
                        name="interestIncome"
                        value={formData.interestIncome}
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
                        type="text"
                        placeholder="Describe any existing loans"
                        name="existingLoans"
                        value={formData.existingLoans}
                        onChange={handleChange}
                    />
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
        </div>
    );
};

export default FormDown;
