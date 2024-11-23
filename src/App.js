// src/App.js
import React, { useState } from 'react';
import './App.css';
import FormModal from './formModal';
import Footer from './footer';
import HeroSection from './HeroSection';
import Features from './features';
import Testimonials from './Testimonials';
import FormDown from './formDown';
import LoanOptions from './LoanOptions';
import LoanCalculator from './loanCalculator'; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [showCalculator, setShowCalculator] = useState(false);

    const handleLoanCalculatorClick = () => {
        setShowCalculator(true);
    };

    const handleCloseCalculator = () => {
        setShowCalculator(false);
    };

    return (
        <>
            <FormModal />
            <HeroSection />
            <LoanOptions /> 
            <Features />
            <Testimonials />
            <FormDown />

            {showCalculator && <LoanCalculator onClose={handleCloseCalculator} />} {/* Render LoanCalculator conditionally */}

            <Footer onLoanCalculatorClick={handleLoanCalculatorClick} />
            
        </>
    );
};

export default App;
