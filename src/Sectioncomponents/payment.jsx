import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BankDetailsForm = () => {
    const navigate = useNavigate();

    // State for storing user input
    const [bankDetails, setBankDetails] = useState({
        accountHolderName: "",
        bankName: "",
        bankNumber: "",
        ifscCode: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // List of 30 banks
    const bankOptions = [
        "State Bank of India",
        "HDFC Bank",
        "ICICI Bank",
        "Axis Bank",
        "Punjab National Bank",
        "Bank of Baroda",
        "Kotak Mahindra Bank",
        "Canara Bank",
        "Union Bank of India",
        "IndusInd Bank",
        "IDBI Bank",
        "Central Bank of India",
        "Indian Bank",
        "UCO Bank",
        "Yes Bank",
        "Bank of Maharashtra",
        "Federal Bank",
        "South Indian Bank",
        "RBL Bank",
        "Bandhan Bank",
        "Dhanlaxmi Bank",
        "Bank Of India",
        "City Union Bank",
        "DCB Bank",
        "Jammu and Kashmir Bank",
        "Lakshmi Vilas Bank",
        "Tamilnad Mercantile Bank",
        "Saraswat Bank",
        "IDFC First Bank",
        "Equitas Small Finance Bank",
    ];

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
    };

    // Validation for form inputs
    const validateForm = () => {
        const newErrors = {};

        // Validate Account Holder Name: only letters and spaces
        if (!bankDetails.accountHolderName.match(/^[A-Za-z\s]+$/)) {
            newErrors.accountHolderName = "Name should contain only letters and spaces.";
        }

        // Validate Bank Account Number: numeric and exactly 10-18 digits
        if (!bankDetails.bankNumber.match(/^\d{10,18}$/)) {
            newErrors.bankNumber =
                "Bank account number should be numeric and between 10 to 18 digits.";
        }

        // Validate IFSC Code: alphanumeric, starting with 4 letters followed by digits
        if (!bankDetails.ifscCode.match(/^[A-Z]{4}[0-9]{7}$/)) {
            newErrors.ifscCode =
                "IFSC code should be 4 uppercase letters followed by 7 digits.";
        }

        // Validate Bank Name: required
        if (!bankDetails.bankName) {
            newErrors.bankName = "Please select a bank.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitted(true);
        }
    };

    // Redirect to home
    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <>
            <header className="bg-secondary text-white py-4 text-center">
                <div className="container">
                    <h1 className="fw-bold">Bank Details</h1>
                </div>
            </header>

            <section className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    {!isSubmitted ? (
                                        <>
                                            <h2 className="text-center text-secondary fw-bold mb-4">
                                                Provide Your Bank Details
                                            </h2>
                                            <form onSubmit={handleSubmit}>
                                                {/* Account Holder Name */}
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="accountHolderName"
                                                        className="form-label"
                                                    >
                                                        Account Holder Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="accountHolderName"
                                                        name="accountHolderName"
                                                        className={`form-control ${
                                                            errors.accountHolderName
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        value={bankDetails.accountHolderName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.accountHolderName && (
                                                        <div className="invalid-feedback">
                                                            {errors.accountHolderName}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Bank Name */}
                                                <div className="mb-3">
                                                    <label htmlFor="bankName" className="form-label">
                                                        Bank Name
                                                    </label>
                                                    <select
                                                        id="bankName"
                                                        name="bankName"
                                                        className={`form-select ${
                                                            errors.bankName ? "is-invalid" : ""
                                                        }`}
                                                        value={bankDetails.bankName}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Bank</option>
                                                        {bankOptions.map((bank, index) => (
                                                            <option key={index} value={bank}>
                                                                {bank}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.bankName && (
                                                        <div className="invalid-feedback">
                                                            {errors.bankName}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Bank Account Number */}
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="bankNumber"
                                                        className="form-label"
                                                    >
                                                        Bank Account Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="bankNumber"
                                                        name="bankNumber"
                                                        className={`form-control ${
                                                            errors.bankNumber ? "is-invalid" : ""
                                                        }`}
                                                        value={bankDetails.bankNumber}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.bankNumber && (
                                                        <div className="invalid-feedback">
                                                            {errors.bankNumber}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* IFSC Code */}
                                                <div className="mb-3">
                                                    <label htmlFor="ifscCode" className="form-label">
                                                        IFSC Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ifscCode"
                                                        name="ifscCode"
                                                        className={`form-control ${
                                                            errors.ifscCode ? "is-invalid" : ""
                                                        }`}
                                                        value={bankDetails.ifscCode}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.ifscCode && (
                                                        <div className="invalid-feedback">
                                                            {errors.ifscCode}
                                                        </div>
                                                    )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100 mt-3"
                                                >
                                                    Submit Details
                                                </button>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-center text-success fw-bold mb-3">
                                                Loan Application Submitted!
                                            </h3>
                                            <p className="text-center">
                                                We will inform you after processing your loan
                                                application.
                                            </p>
                                            <div className="text-center mt-4">
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={handleBackToHome}
                                                >
                                                    Back to Home
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BankDetailsForm;
