import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import japaneselogo from '../../public/japaneselogo.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={japaneselogo} alt="Logo" className="logo-img" />
        <span className="logo-text">Soto's Store</span>
      </div>

      {/* Menu Icon for mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/apply" onClick={toggleMenu}>Join Our Team</Link></li>
          <li><Link to="/admin-dashboard" onClick={toggleMenu}>Admin Dashboard</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && <div className="nav-backdrop" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
