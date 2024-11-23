import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NextBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve user data passed from LoanOtp or previous page
  const userData = location.state || {}; // Use location.state to access passed data

  // Local state for additional selection
  const [employmentType, setEmploymentType] = useState("");

  const handleContinue = () => {
    if (!employmentType) {
      alert("Please select an employment type.");
      return;
    }

    // Combine existing user data with the newly selected employment type
    const updatedUserData = { ...userData, employmentType };

    // Navigate to the next page with updated data
    navigate("/nextBtn2", { state: updatedUserData });
  };

  return (
    <>
      <header className="bg-success text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">Select Employment Type</h1>
        </div>
      </header>

      <section className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="text-center text-success fw-bold mb-4">Employment Type</h2>
                  
                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        employmentType === "Salaried" ? "active" : ""
                      }`}
                      onClick={() => setEmploymentType("Salaried")}
                    >
                      Salaried
                    </button>
                  </div>


                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        employmentType === "Self-Employed" ? "active" : ""
                      }`}
                      onClick={() => setEmploymentType("Self-Employed")}
                    >
                      Self-Employed
                    </button>
                  </div>

                  <div className="card p-3">
                    <button
                      className={`btn btn-block btn-outline-success ${
                        employmentType === "Other" ? "active" : ""
                      }`}
                      onClick={() => setEmploymentType("Other")}
                    >
                      Other
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

export default NextBtn;
