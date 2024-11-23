import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './formModal.css';
import './App.css';
import uparrow from './images/icons8-money-32.png'; // Custom styles for loan boxes
import lifeinsurance from "./images/life-insurance.png";
import buyhome from "./images/buy-home.png";
import creditcard from './images/payment.png';
import creditscore from "./images/credit-score.png";
// import icon48 from './images/icons8-business-48.png';
import insurance from './images/icons8-insurance-50.png';
import moreoptions from './images/icons8-forward-button-50.png';
// import PersonalLoanSection from './Sectioncomponents/personalLoanSection';
import { NavLink } from "react-router-dom";

const LoanOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="loan-options-container row-md-8">
      <NavLink style={{ textDecoration: 'none' }} to='/phoneOtp'>
        <div
          className={`loan-option ${selectedOption === 'personalLoans' ? 'active' : ''}`}
          onClick={() => handleOptionClick('personalLoans')}
        >
          <img src={uparrow} alt="Personal Loans" className="loan-icon" />
          <p>Personal Loans</p>
        </div>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }} to='insurance'>
        <div style={{padding:'20px 37px'}}
          className={`loan-option ${selectedOption === 'insurance' ? 'active' : ''}`}
          onClick={() => handleOptionClick('insurance')}
        >
          <img src={insurance} alt="Insurance" className="loan-icon" />
          <p>Insurance</p>
        </div>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }} to='lifeinsurance'>
        <div 
          className={`loan-option ${selectedOption === 'lifeInsurance' ? 'active' : ''}`}
          onClick={() => handleOptionClick('lifeInsurance')}
        >
          <img src={lifeinsurance} alt="Life Insurance" className="loan-icon" />
          <p>Life Insurance</p>
        </div>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }} to='homePurchase'>
        <div
          className={`loan-option ${selectedOption === 'homePurchase' ? 'active' : ''}`}
          onClick={() => handleOptionClick('homePurchase')}
        >
          <img src={buyhome} alt="Home Purchase" className="loan-icon" />
          <p>Home Purchase</p>
        </div>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }} to='creditCards'>
        <div style={{padding:'20px 29px'}}
          className={`loan-option ${selectedOption === 'creditCards' ? 'active' : ''}`}
          onClick={() => handleOptionClick('creditCards')}
        >
          <img src={creditcard} alt="Credit Cards" className="loan-icon" />
          <p>Credit Cards</p>
        </div>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }} to='creditScore'>
      <div style={{padding:'20px 28px'}}
        className={`loan-option ${selectedOption === 'creditScore' ? 'active' : ''}`}
        onClick={() => handleOptionClick('creditScore')}
      >
        <img src={creditscore} alt="Credit Score" className="loan-icon" />
        <p>Credit Score</p>
      </div>
      </NavLink>

 
      <div
        className={`loan-option more-options ${selectedOption === 'moreOptions' ? 'active' : ''}`}
        onClick={() => handleOptionClick('moreOptions')}
      >
        <img src={moreoptions} alt="More Options" className="loan-icon" />
        <p>More Options</p>
        <i className="bi bi-arrow-right"></i>
      </div>
    </div>
  );
};

export default LoanOptions;
