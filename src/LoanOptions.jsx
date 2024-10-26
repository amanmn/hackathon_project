import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './formModal.css';
import './App.css';
import  uparrow from './images/icons8-money-32.png'// Custom styles for loan boxes
import lifeinsurance from "./images/life-insurance.png";
import buyhome from "./images/buy-home.png";
import creditcard from './images/payment.png';
import creditscore from "./images/credit-score.png";
import icon48 from './images/icons8-business-48.png';
import insurance from './images/icons8-insurance-50.png';
import moreoptions from './images/icons8-forward-button-50.png';

const LoanOptions = () => {
  return (
    <div className="loan-options-container row-md-8">
      <div className="loan-option active">
        <img src={uparrow}  alt="Personal Loans" className="loan-icon" />
        <p>Personal Loans</p>
      </div>
      <div className="loan-option">
        <img src={icon48} alt="Business Loans" className="loan-icon" />
        <p>Business Loans</p>
      </div>
      <div className="loan-option">
        <img src={insurance} alt="Insurance" className="loan-icon" />
        <p>Insurance</p>
      </div>
      <div className="loan-option">
        <img src={lifeinsurance}  alt="Life Insurence" className="loan-icon" />
        <p>Life Insurance</p>
      </div>
      <div className="loan-option">
        <img src={buyhome} alt="Home Purchase" className="loan-icon" />
        <p>Home Purchase</p>
      </div>
      <div className="loan-option">
        <img src={creditcard} alt="Credit Cards" className="loan-icon" />
        <p>Credit Cards</p>
      </div>      
      <div className="loan-option">
        <img src={creditscore} alt="Credit Score" className="loan-icon" />
        <p>Credit Score</p>
      </div>
      <div className="loan-option more-options">
      <img src={moreoptions} alt="Credit Score" className="loan-icon" />
        <p>More Options</p>
        <i className="bi bi-arrow-right"></i>
      </div>
    </div>
  );
};

export default LoanOptions;