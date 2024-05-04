import React from 'react';
import './Dashboard.css';

 
export const Dashboard = () => {
  return (
    <div className="Admin-page-container">
    <div className="center-content"> {/* Appliquez la classe CSS pour centrer le contenu */}
      <div className="text-center mb-4">
        <h2>Dashboard</h2>
        <div className="d-grid gap-2 col-6 mx-auto">
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary login-button">Consulter les logs</button>
          </div>
          <div className="d-grid gap-2 mt-3">
           {/* <button type="submit" className="btn btn-primary login-button">Afficher les informations du partenaire</button>*/}
            <a href="/part" className="btn btn-primary login-button">Afficher les informations du partenaire</a>
          </div>
          <div className="d-grid gap-2 mt-3">
            {/*<button type="submit" className="btn btn-primary login-button">EXIT</button>*/}
            <a href="/part" className="btn btn-primary login-button exit-button">Exit</a>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};