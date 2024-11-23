import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NextBtn2 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve existing user data from the previous page
  const userData = location.state || {};

  // Local state for additional selection
  const [yearlyIncome, setYearlyIncome] = useState("");

  const handleContinue = () => {
    if (!yearlyIncome) {
      alert("Please select your yearly income.");
      return;
    }

    // Combine existing user data with the new yearly income
    const updatedUserData = { ...userData, yearlyIncome };

    // Navigate to the LoanSummary page with updated user data
    navigate("/nextBtn3", { state: updatedUserData });
  };

  return (
    <>
      <header className="bg-success text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">Select Your Yearly Income</h1>
        </div>
      </header>

      <section className="d-flex align-items-center justify-content-center ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="text-center text-success fw-bold mb-4">Yearly Income</h2>

                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        yearlyIncome === "Below 5 Lakhs" ? "active" : ""
                      }`}
                      onClick={() => setYearlyIncome("Below 5 Lakhs")}
                    >
                      Below 5 Lakhs
                    </button>
                  </div>
                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        yearlyIncome === "5-10 Lakhs" ? "active" : ""
                      }`}
                      onClick={() => setYearlyIncome("5-10 Lakhs")}
                    >
                      5-10 Lakhs
                    </button>
                  </div>
                  <div className="card p-3">
                    <button
                      className={`btn btn-outline-success ${
                        yearlyIncome === "Above 10 Lakhs" ? "active" : ""
                      }`}
                      onClick={() => setYearlyIncome("Above 10 Lakhs")}
                    >
                      Above 10 Lakhs
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

export default NextBtn2;
