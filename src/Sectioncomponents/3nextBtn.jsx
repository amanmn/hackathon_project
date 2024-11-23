import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NextBtn3 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve user data passed from the previous page
  const userData = location.state || {};

  // Local state for new data collection
  const [loanPurpose, setLoanPurpose] = useState("");

  const handleContinue = () => {
    if (!loanPurpose) {
      alert("Please select the purpose of your loan.");
      return;
    }

    // Combine existing user data with new data
    const updatedUserData = { ...userData, loanPurpose };

    // Navigate to the LoanSummary page with updated data
    navigate("/loanSummary", { state: updatedUserData });
  };

  return (
    <>
      <header className="bg-success text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">Purpose of Your Loan</h1>
        </div>
      </header>

      <section className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="text-center text-success fw-bold mb-4">Loan Purpose</h2>

                  <div className="card p-3">
                    <button
                      className={`btn  btn-outline-success ${
                        loanPurpose === "Home Renovation" ? "active" : ""
                      }`}
                      onClick={() => setLoanPurpose("Home Renovation")}
                    >
                      Home Renovation
                    </button>
                  </div>
                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        loanPurpose === "Debt Consolidation" ? "active" : ""
                      }`}
                      onClick={() => setLoanPurpose("Debt Consolidation")}
                    >
                      Debt Consolidation
                    </button>
                  </div>
                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        loanPurpose === "Education" ? "active" : ""
                      }`}
                      onClick={() => setLoanPurpose("Education")}
                    >
                      Education
                    </button>
                  </div>

                  <button className="btn btn-success mt-3 w-100" onClick={handleContinue}>
                    Continue
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

export default NextBtn3;
