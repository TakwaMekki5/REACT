import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Part = () => {
  const [partnerName, setPartnerName] = useState('');
  const [serverChoice, setServerChoice] = useState('');
  const [displayOption, setDisplayOption] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let url;
      const params = {
        partner_name: partnerName,
        server_choice: serverChoice,
        display_option: displayOption
      };

      if (displayOption === 'Port et Adresse Réseau') {
        url = 'http://127.0.0.1:8000/home/';
      } else if (displayOption === 'Certificat') {
        url = 'http://127.0.0.1:8000/certif/';
      } else {
        console.error('Invalid display option');
        return;
      }

      const response = await axios.get(url, { params });

      if (displayOption === 'Port et Adresse Réseau') {
        navigate('/sap', { state: { data: response.data } });
      } else if (displayOption === 'Certificat') {
        navigate('/certif', { state: { data: response.data } });
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="Admin-page-container">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="form-group">
          <h2>Informations du Partenaire</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-group-label">Nom du Partenaire</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom du Partenaire"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />

            <label className="form-group-label">Choisir le serveur</label>
            <select
              className="form-control"
              value={serverChoice}
              onChange={(e) => setServerChoice(e.target.value)}
            >
              <option value=""></option>
              <option value="V01">frsopslcftv01</option>
              <option value="V03">frsopslcftv03</option>
            </select>

            <label className="form-group-label">Autres Informations</label>
            <select
              className="form-control"
              value={displayOption}
              onChange={(e) => setDisplayOption(e.target.value)}
            >
              <option value=""></option>
              <option value="Port et Adresse Réseau">Afficher le Port et l'Adresse Réseau</option>
              <option value="Certificat">Afficher les Informations du Certificat</option>
            </select>

            <div className="d-flex justify-content-between mt-3">
              <button type="submit" className="btn btn-primary login-button mx-2">OK</button>
              <button type="button" onClick={() => navigate('/Dashboard')} className="btn btn-primary login-button mx-2">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Part;
