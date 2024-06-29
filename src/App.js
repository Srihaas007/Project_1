// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import ChatPopup from './ChatPopup';
import HowtoUse from './HowtoUse'; // Import HowtoUse component
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <nav>
        <h1>Chat Bot Project 1</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/howtouse">How to Use</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/howtouse" element={<HowtoUse />} />
        </Routes>
      </div>
      <ChatPopup />
      <footer>© 2024 Project-1. All rights reserved.</footer>
    </div>
  </Router>
);

export default App;
