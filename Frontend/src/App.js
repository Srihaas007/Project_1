import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import ChatPopup from './ChatPopup';
import HowtoUse from './HowtoUse'; // Import HowtoUse component
import './App.css';

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <h1>Chat Bot Project 1</h1>
          {/* Hamburger menu icon */}
          <div className="menu-icon" onClick={toggleNav}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <ul className={showNav ? 'show' : ''}>
            <li><Link to="/" onClick={closeNav}>Home</Link></li>
            <li><Link to="/about" onClick={closeNav}>About Us</Link></li>
            <li><Link to="/services" onClick={closeNav}>Services</Link></li>
            <li><Link to="/howtouse" onClick={closeNav}>How to Use</Link></li>
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
};

export default App;
