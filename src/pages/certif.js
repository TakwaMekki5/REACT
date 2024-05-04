import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Certif = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const navigate = useNavigate();

  const handleReturn = () => {
    
    navigate('/part');
 };

  return (
    <div className="Admin-page-container">
    <div>
      
      <p>SSL_Info: {data && data.SSL_Info}</p>
      <p>Root_CID: {data && data.Root_CID && data.Root_CID.join(', ')}</p>
      <button onClick={handleReturn} className='login-button'>Back </button>
    </div>
    </div>
  );
};

export default Certif;
