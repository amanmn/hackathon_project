import React from 'react'
import PersonalLoanSection from './Sectioncomponents/personalLoanSection';
import { Link } from "react-router-dom";

const sectionRouting = () => {
  return (
    <>  
        <Link to={PersonalLoanSection} />
    </>
  )
}

export default sectionRouting