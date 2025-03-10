// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import PersonalInformationPage from './components/PersonalInformation';
import TransactionHistoryPage from './components/TransactionHistory';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path='/' element={<PersonalInformationPage />} />
            <Route path='/transactions' element={<TransactionHistoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
