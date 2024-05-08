import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { NAccount } from './pages/NAccount';
import { Password } from './pages/Password';
import { ChangePassword } from './pages/ChangePassword';
import { Dashboard } from './pages/Dashboard';
import Part from './pages/part';
import Certif from './pages/certif';
import Sap from './pages/sap';
import Flux from './pages/flux';


function App() {
    return (
        <BrowserRouter>
            <div className="content-container">
                <div className="form-and-image-container">
                    <div className="form-container">
                        <Routes> 
                            <Route path='/' element={<Login />} />
                            <Route path="/password" element={<Password />} />
                            <Route path="/naccount" element={<NAccount />} />
                            <Route path="/changepassword" element={<ChangePassword />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/part" element={<Part />} />
                            <Route path="/sap" element={<Sap />} />
                            <Route path="/certif" element={<Certif />} />
                            <Route path="/flux" element={<Flux/>} />
                            <Route path="*" element={<div> Page Not Found!</div>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
