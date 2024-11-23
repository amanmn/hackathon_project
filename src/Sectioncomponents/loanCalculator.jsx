import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoanCalculator = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bank } = location.state || {};

    const [loanAmount, setLoanAmount] = useState(bank.maxLoanAmount); // Default to max eligible amount
    const [tenure, setTenure] = useState(1); // Default to 1 year
    const [emi, setEmi] = useState(0);
    const [totalInterestPayable, setTotalInterestPayable] = useState(0);
    const [totalPayableAmount, setTotalPayableAmount] = useState(0);
    const [processingFeeAmount, setProcessingFeeAmount] = useState(0);

    const calculateLoanDetails = () => {
        const principal = loanAmount;
        const rate = bank.interestRate / 12 / 100; // Monthly interest rate
        const months = tenure * 12; // Convert years to months

        // EMI calculation
        const emiValue =
            (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
        const totalInterest = emiValue * months - principal;
        const totalAmountPayable = principal + totalInterest;
        const processingFee = (principal * bank.processingFee) / 100;

        // Update state
        setEmi(emiValue.toFixed(2));
        setTotalInterestPayable(totalInterest.toFixed(2));
        setTotalPayableAmount(totalAmountPayable.toFixed(2));
        setProcessingFeeAmount(processingFee.toFixed(2));
    };

    // Handle proceed button click
    const handleProceed = () => {
        navigate("/paymentMethods", { state: { loanAmount, tenure, bank } }); // Pass necessary data to PaymentMethods page
    };
    const handleBackToHome =()=>{
        navigate("/");
    }

    return (
        <>
            <header className="bg-primary text-white py-4 text-center">
                <div className="container">
                    <h1 className="fw-bold">Loan Calculator</h1>
                </div>
            </header>

            <section className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <h2 className="text-center text-primary fw-bold mb-4">
                                        {bank.bankName} Loan Details
                                    </h2>

                                    <ul className="list-group mb-4">
                                        <li className="list-group-item">
                                            <strong>Max Loan Amount:</strong> ₹{bank.maxLoanAmount.toLocaleString()}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Interest Rate:</strong> {bank.interestRate}% (fixed)
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Processing Fee:</strong> {bank.processingFee}%
                                        </li>
                                    </ul>

                                    <div className="mb-3">
                                        <label htmlFor="loanAmount" className="form-label">
                                            Loan Amount (₹)
                                        </label>
                                        <input
                                            type="number"
                                            id="loanAmount"
                                            className="form-control"
                                            value={loanAmount}
                                            onChange={(e) =>
                                                setLoanAmount(
                                                    Math.min(Number(e.target.value), bank.maxLoanAmount)
                                                )
                                            }
                                            max={bank.maxLoanAmount}
                                        />
                                        <small className="text-muted">
                                            Max: ₹{bank.maxLoanAmount.toLocaleString()}
                                        </small>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tenure" className="form-label">
                                            Loan Tenure (Years)
                                        </label>
                                        <input
                                            type="number"
                                            id="tenure"
                                            className="form-control"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            min={1}
                                            max={20} // Maximum 20 years
                                        />
                                        <small className="text-muted">
                                            Min: 1 year, Max: 20 years
                                        </small>
                                    </div>

                                    <button
                                        className="btn btn-primary w-100 mb-4"
                                        onClick={calculateLoanDetails}
                                    >
                                        Calculate EMI
                                    </button>

                                    {emi > 0 && (
                                        <div>
                                            <h4 className="text-center text-success fw-bold">Loan Summary</h4>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <strong>EMI (Monthly Installment):</strong> ₹{emi}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Total Interest Payable:</strong> ₹{totalInterestPayable}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Total Amount Payable:</strong> ₹{totalPayableAmount}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Processing Fee:</strong> ₹{processingFeeAmount}
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                    <button
                                        className="btn btn-success w-100 mt-4"
                                        onClick={handleProceed}
                                    >
                                        Proceed with Loan
                                    </button>
                                    <button
                                        className="btn btn-secondary w-100 mt-4"
                                        onClick={handleBackToHome}
                                    >
                                        Back to Home
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoanCalculator;
