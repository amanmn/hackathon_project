import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'; // Import for OTP functionality
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
import { auth, db } from '../fireStore'; // Correct imports for Firestore and auth
import './sstyle.css';

function PersonalLoanSection() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Handle mobile number change
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setMobileNumber(value);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (mobileNumber.length === 10) {
      // Store the mobile number in Firestore and generate OTP
      storeUserData(mobileNumber);
    } else {
      setMessage('Please enter a valid 10-digit mobile number.');
    }
  };

  // Store user data in Firestore
  const storeUserData = async (mobileNumber) => {
    try {
      // Add the mobile number to the "users" collection in Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        mobileNumber: mobileNumber,
        timestamp: new Date(), // Optionally, you can also store the timestamp
      });
      console.log('Document written with ID: ', docRef.id);
      // Once data is stored, send OTP
      sendOtp(mobileNumber);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Send OTP to the given phone number
  const sendOtp = (mobileNumber) => {
    const phoneNumber = `+91${mobileNumber}`;
    const appVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          console.log('Recaptcha verified:', response);
        },
      },
      auth
    );

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setOtpSent(true);
        setMessage('OTP sent successfully!');
      })
      .catch((error) => {
        setMessage(`Error sending OTP: ${error.message}`);
      });
  };

  // Verify OTP entered by the user
  const verifyOtp = () => {
    if (!confirmationResult) {
      setMessage('No OTP request found. Please resend OTP.');
      return;
    }
    window.confirmationResultz
      .confirm(verificationCode)
      .then((result) => {
        const user = result.user;
        setMessage(`User logged in successfully. UID: ${user.uid}`);
      })
      .catch((error) => {
        setMessage(`Invalid OTP: ${error.message}`);
      });
  };

  return (
    <div className="containerrr">
      <h1 className="h11">Personal Loan</h1>
      <ul className="ull">
        <li>Compare & Choose the Best Offer</li>
        <li>Check Loan Amount Eligibility</li>
        <li>Know your Approval Chances</li>
      </ul>

      <h2>Unlock Best Personal Loan Offers suitable for your needs from 30+ Lenders</h2>
      <ul className="ull">
        <li>Hand-picked offers from 30+ lenders</li>
        <li>Money in mins via Pre-Approved loans</li>
        <li>Instant sanction and disbursal</li>
        <li>Contact-less processes</li>
      </ul>

      <form className="sectionform" onSubmit={handleSubmit}>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <div className="input-group">
          <span className="input-group-text">+91 -</span>
          <input
            type="text"
            className="form-controll"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleChange}
            maxLength="10"
            pattern="[0-9]*"
            required
          />
          <span className="input-group-text">
            {mobileNumber.length}/10 Digits
          </span>
        </div>
        <button type="submit" className="btn btn-primaryy">Proceed</button>
      </form>

      {otpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PersonalLoanSection;
