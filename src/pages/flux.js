import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Flux = () => {
  const location = useLocation();
  const { partnerName, fluxInfo, error } = location.state || {};
  const navigate = useNavigate();
  // const [error, setError] = useState(null); // Ajouter un état pour gérer les erreurs

  const handleReturn = () => {
    navigate('/part');
  };

  return (
    <div className="Admin-page-container">
      <div>
        {fluxInfo ? (
          <div>
            <h2>Informations des flux pour le partenaire '{partnerName}':</h2>
            <p style={{ color: 'black' }}>{fluxInfo}</p>
          </div>
        ) : (
          <p style={{ color: 'red' }}>{error}</p>
        )}
        <button onClick={handleReturn} className='login-button'>Retour</button>
      </div>
    </div>
  );
};

export default Flux;
