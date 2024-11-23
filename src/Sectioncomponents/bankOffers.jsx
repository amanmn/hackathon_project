import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BankOffers = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { employmentType, yearlyIncome, loanAmount } = location.state || {};

    // State to store selected bank
    const [selectedBank, setSelectedBank] = useState(null);
    const [calculatedLoanDetails, setCalculatedLoanDetails] = useState(null);
    const [sortedOffers, setSortedOffers] = useState([]);

    // Full bank offers data
    const bankOffers = [
        { bankName: "HDFC Bank", interestRate: 7.2, maxLoanAmount: 5000000, tenure: "5 - 20 years", processingFee: 1 },
        { bankName: "ICICI Bank", interestRate: 7.8, maxLoanAmount: 4500000, tenure: "5 - 15 years", processingFee: 0.75 },
        { bankName: "State Bank of India (SBI)", interestRate: 7.5, maxLoanAmount: 6000000, tenure: "5 - 25 years", processingFee: 1 },
        { bankName: "Axis Bank", interestRate: 8.0, maxLoanAmount: 4000000, tenure: "3 - 15 years", processingFee: 0.5 },
        { bankName: "Kotak Mahindra Bank", interestRate: 8.2, maxLoanAmount: 3000000, tenure: "5 - 20 years", processingFee: 1.25 },
        { bankName: "Punjab National Bank (PNB)", interestRate: 8.5, maxLoanAmount: 2500000, tenure: "5 - 10 years", processingFee: 1.5 },
        { bankName: "Bank of Baroda", interestRate: 7.9, maxLoanAmount: 3500000, tenure: "5 - 15 years", processingFee: 1 },
        { bankName: "IDBI Bank", interestRate: 7.6, maxLoanAmount: 5000000, tenure: "5 - 20 years", processingFee: 0.75 },
        { bankName: "Yes Bank", interestRate: 8.1, maxLoanAmount: 2000000, tenure: "3 - 10 years", processingFee: 2 },
        { bankName: "IndusInd Bank", interestRate: 7.7, maxLoanAmount: 4000000, tenure: "5 - 12 years", processingFee: 1.25 },
        { bankName: "Canara Bank", interestRate: 7.4, maxLoanAmount: 4500000, tenure: "5 - 18 years", processingFee: 1 },
        { bankName: "Union Bank of India", interestRate: 7.3, maxLoanAmount: 5500000, tenure: "5 - 25 years", processingFee: 1.1 },
        { bankName: "Central Bank of India", interestRate: 7.9, maxLoanAmount: 3000000, tenure: "5 - 15 years", processingFee: 1.5 },
        { bankName: "Bank of India", interestRate: 8.0, maxLoanAmount: 2500000, tenure: "3 - 12 years", processingFee: 1.25 },
        { bankName: "UCO Bank", interestRate: 7.5, maxLoanAmount: 4000000, tenure: "5 - 20 years", processingFee: 1.2 },
    ];

    // Sort bank offers on component mount
    useEffect(() => {
        const sorted = [...bankOffers].sort((a, b) => {
            const aEligible = a.maxLoanAmount <= loanAmount;
            const bEligible = b.maxLoanAmount <= loanAmount;

            // Eligible banks come first; maintain original order otherwise
            return bEligible - aEligible;
        });
        setSortedOffers(sorted);
    }, [loanAmount]);

    // Handle bank selection
    const handleBankSelection = (bank) => {
        setSelectedBank(bank);

        // Calculate processing fee and estimated interest
        const processingFee = (loanAmount * bank.processingFee) / 100;
        const totalInterest = (loanAmount * bank.interestRate) / 100;

        setCalculatedLoanDetails({
            processingFee,
            totalInterest,
            totalPayable: loanAmount + processingFee + totalInterest,
        });
    };

    // Proceed to loan application
    const handleProceed = () => {
        if (selectedBank) {
            navigate("/loanCalculator", { state: { ...calculatedLoanDetails, bank: selectedBank } });
        } else {
            alert("Please select a bank to proceed.");
        }
    };

    return (
        <>
            <header className="bg-success text-white py-4 text-center">
                <div className="container">
                    <h1 className="fw-bold">Bank Offers</h1>
                </div>
            </header>

            <section className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    {/* <h2 className="text-center text-success fw-bold mb-4">Your Loan Details</h2>
                                    <ul className="list-group mb-4">
                                        <li className="list-group-item">
                                            <strong>Employment Type:</strong> {employmentType || "N/A"}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Yearly Income:</strong> {yearlyIncome || "N/A"}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Eligible Loan Amount:</strong> ₹{loanAmount.toLocaleString() || "N/A"}
                                        </li>
                                    </ul> */}

                                    <h3 className="text-center text-success fw-bold mb-3">Available Bank Offers</h3>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="table-success">
                                                <tr>
                                                    <th>Select</th>
                                                    <th>Bank Name</th>
                                                    <th>Interest Rate</th>
                                                    <th>Max Loan Amount</th>
                                                    <th>Loan Tenure</th>
                                                    <th>Processing Fee</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sortedOffers.map((offer, index) => {
                                                    const isEligible = offer.maxLoanAmount <= loanAmount;

                                                    return (
                                                        <tr key={index} className={!isEligible ? "table-secondary" : ""}>
                                                            <td>
                                                                <button
                                                                    className={`btn btn-sm ${
                                                                        selectedBank?.bankName === offer.bankName
                                                                            ? "btn-success"
                                                                            : "btn-outline-success"
                                                                    }`}
                                                                    onClick={() => handleBankSelection(offer)}
                                                                    disabled={!isEligible}
                                                                >
                                                                    {selectedBank?.bankName === offer.bankName
                                                                        ? "Selected"
                                                                        : isEligible
                                                                        ? "Select"
                                                                        : "Not Eligible"}
                                                                </button>
                                                            </td>
                                                            <td>{offer.bankName}</td>
                                                            <td>{offer.interestRate}%</td>
                                                            <td>₹{offer.maxLoanAmount.toLocaleString()}</td>
                                                            <td>{offer.tenure}</td>
                                                            <td>{offer.processingFee}%</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
{/* 
                                    {calculatedLoanDetails && (
                                        <div className="mt-4">
                                            <h4 className="text-center text-success fw-bold">Loan Details Summary</h4>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <strong>Processing Fee:</strong> ₹{calculatedLoanDetails.processingFee.toLocaleString()}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Estimated Interest:</strong> ₹{calculatedLoanDetails.totalInterest.toLocaleString()}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Total Payable Amount:</strong> ₹{calculatedLoanDetails.totalPayable.toLocaleString()}
                                                </li>
                                            </ul>
                                        </div>
                                    )} */}

                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn btn-primary me-2" onClick={() => navigate("/")}>
                                            Back to Home
                                        </button>
                                        <button className="btn btn-primary" onClick={handleProceed}>
                                            Proceed with Selected Bank
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BankOffers;
