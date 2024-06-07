import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VitapathAppBar from './components/VitapathAppBar';
import VitapathDrawer from './components/VitapathDrawer';
import Home from './components/Home';
import MedicalRecords from './components/MedicalRecord';

function App() {
  return (
    <Router>
      <VitapathAppBar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <VitapathDrawer />
        <div className="App" style={{ width: '100%', height: '100%', paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<div id="Home"><Home /></div>} />
            <Route path="/MedicalRecords" element={<div id="MedicalRecord"><MedicalRecords /></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
