import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Sap = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const navigate = useNavigate();
  const handleReturn = () => {
    
     navigate('/part');
  };

  return (
    <div className="Admin-page-container">
    <div>
      
    <p style={{ color: 'black' }}>SAP: {data && data.SAP}</p>
    <p style={{ color: 'black' }}>HOST: {data && data.HOST}</p>
    <button onClick={handleReturn} className='login-button'>Back </button>
    </div>
    </div>
  );
};

export default Sap;
