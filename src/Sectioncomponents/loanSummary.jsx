import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoanSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state || {};

    const [isEligible, setIsEligible] = useState(false);
    const [loanAmount, setLoanAmount] = useState(0);

    useEffect(() => {
        const calculateEligibility = () => {
            const { employmentType, yearlyIncome } = userData;

            if (employmentType === "Salaried") {
                if (yearlyIncome === "Below 5 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(1000000);
                } else if (yearlyIncome === "5-10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(3000000);
                } else if (yearlyIncome === "Above 10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(5000000);
                }
            } else if (employmentType === "Self-Employed") {
                if (yearlyIncome === "5-10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(3000000);
                } else if (yearlyIncome === "Above 10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(4000000);
                }
            } else if (employmentType === "Other") {
                if (yearlyIncome === "5-10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(2000000);
                } else if (yearlyIncome === "Above 10 Lakhs") {
                    setIsEligible(true);
                    setLoanAmount(3000000);
                }
            } else {
                setIsEligible(false);
            }
        };

        calculateEligibility();
    }, [userData]);

    const handleButtonClick = () => {
        if (isEligible) {
            navigate("/bankOffers", {
                state: {
                    ...userData,
                    loanAmount,
                },
            });
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <header className="bg-success text-white py-4 text-center">
                <div className="container">
                    <h1 className="fw-bold">Loan Summary</h1>
                </div>
            </header>

            <section className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <h2 className="text-center text-success fw-bold mb-4">Your Details</h2>

                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong>Employment Type:</strong> {userData.employmentType || "N/A"}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Yearly Income:</strong> {userData.yearlyIncome || "N/A"}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Loan Purpose:</strong> {userData.loanPurpose || "N/A"}
                                        </li>
                                    </ul>

                                    <div className="mt-4">
                                        {isEligible ? (
                                            <>
                                                <h3 className="text-center text-success fw-bold">🎉 Congratulations!</h3>
                                                <p className="text-center">
                                                    You are eligible for a loan of up to{" "}
                                                    <strong>₹{loanAmount.toLocaleString()}</strong>.
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <h3 className="text-center text-danger fw-bold">❌ Sorry!</h3>
                                                <p className="text-center">
                                                    Unfortunately, you are not eligible for a loan at this time.
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    <button
                                        className={`btn w-100 mt-4 ${isEligible ? "btn-success" : "btn-danger"}`}
                                        onClick={handleButtonClick}
                                    >
                                        {isEligible ? "View Bank Offers" : "Back to Home"}
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

export default LoanSummary;
