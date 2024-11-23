import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PersonalLoanSection from './Sectioncomponents/personalLoanSection';
import PhoneOtp from './Sectioncomponents/phoneOtp';
import NextBtn1 from './Sectioncomponents/nextBtn';
import NextBtn2 from './Sectioncomponents/2nextBtn';
import NextBtn3 from './Sectioncomponents/3nextBtn';
import LoanSummary from './Sectioncomponents/loanSummary';
import BankOffers from './Sectioncomponents/bankOffers';
import LoanCalculator from './Sectioncomponents/loanCalculator';
import BankDetailsForm from './Sectioncomponents/payment';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, 
  {
    path: '/personalLoans',
    element: <PersonalLoanSection/>
  },
  {
    path: '/phoneOtp',
    element: <PhoneOtp/>
  },
  {
    path:'/nextBtn',
    element: <NextBtn1/>
  },
  {
    path:'/nextBtn2',
    element: <NextBtn2/>
  },
  {
    path:'/nextBtn3',
    element: <NextBtn3/>
  },
  {
    path:'/loanSummary',
    element: <LoanSummary/>
  },
  {
    path:'/bankOffers',
    element: <BankOffers/>
  },
  {
    path:'/loanCalculator',
    element: <LoanCalculator/>
  },
  {
    path:'/paymentMethods',
    element: <BankDetailsForm/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
