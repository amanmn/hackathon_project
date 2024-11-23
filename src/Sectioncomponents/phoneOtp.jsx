import React, { useState } from "react";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../fireStore";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../fireStore";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PhoneOtp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false); // Prevent multiple OTP sends
  const navigate = useNavigate();

  // Initialize reCAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            handleSignup();
            console.log("Recaptcha solved");
          },
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please try again.");
          },
        },
        auth
      );
    }
  };

  const handleSignup = async () => {
    if (!ph || ph.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (otpSent) {
      toast.info("OTP already sent. Please check your phone.");
      return;
    }

    setLoading(true);

    // Store user data before generating OTP
    try {
      await addDoc(collection(db, "users"), {
        mobileNumber: `+${ph}`,
        timestamp: new Date(),
      });
      toast.success("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data to Firestore:", error);
      toast.error("Failed to save user data. Please try again.");
      setLoading(false);
      return;
    }

    // Setup reCAPTCHA and send OTP
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const formattedPh = `+${ph}`;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPh, appVerifier);
      window.confirmationResult = confirmationResult;
      setOtpSent(true);
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Failed to send OTP. Please try again.");
      setLoading(false);
    }
  };

  const handleOTPVerify = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const confirmationResult = window.confirmationResult;
      const result = await confirmationResult.confirm(otp);
      setUser(result.user); // Update user state
      toast.success("OTP verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(`Failed to verify OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <>
      <header className="bg-success text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">Personal Loan</h1>
          <ul className="list-unstyled">
            <li>✔ Compare & Choose the Best Offer</li>
            <li>✔ Check Loan Amount Eligibility</li>
            <li>✔ Know your Approval Chances</li>
          </ul>
        </div>
      </header>

      <section className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <Toaster toastOptions={{ duration: 4000 }} />
              <div id="recaptcha-container"></div>

              {user ? (
                <div className="text-center">
                  <h2 className="text-success fw-bold">👍 Login Successful!</h2>
                  <button className="btn btn-success w-100" onClick={() => navigate("/nextBtn")}>
                    Next
                  </button>
                </div>
              ) : (
                <div className="card shadow-lg">
                  <div className="card-body mx-auto mt-5 mb-5">
                    <h2 className="text-center text-success fw-bold mb-4">Welcome User</h2>
                    {showOTP ? (
                      <>
                        <label htmlFor="otp" className="form-label text-success fw-bold">
                          Enter your OTP
                        </label>
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                          autoFocus
                          className="d-flex justify-content-between mb-3"
                          inputStyle={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "5px",
                            border: "1px solid #ced4da",
                            textAlign: "center",
                          }}
                        />
                        <button
                          onClick={handleOTPVerify}
                          className="btn btn-success w-100"
                          disabled={loading}
                        >
                          {loading && <span className="spinner-border spinner-border-sm me-2" />}
                          Verify OTP
                        </button>
                      </>
                    ) : (
                      <>
                        <label htmlFor="phone" className="form-label text-success fw-bold">
                          Verify your phone number
                        </label>
                        <PhoneInput
                          country="in"
                          value={ph}
                          onChange={setPh}
                          inputClass="form-control"
                        />
                        <button
                          onClick={handleSignup}
                          className="btn btn-success w-100 mt-3"
                          disabled={loading}
                        >
                          {loading && <span className="spinner-border spinner-border-sm me-2" />}
                          Send code via SMS
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhoneOtp;
