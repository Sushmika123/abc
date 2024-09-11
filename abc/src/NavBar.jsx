import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';

const LocationNavBar = () => {
  return (
    <nav className="logo-navbar">
      <div className="logo">
        <img src={logo} alt="Restaurant Logo" />
      </div>
      <div className="location-info">
        <p>Our Location: Jaffna, Clocktower Road &</p>
        <p>Kodikamam Junction</p>
      </div>
    </nav>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
        <li><Link to="/gallery">Gallery</Link></li> 
        <li><Link to="/Service">Service</Link></li>
        <li><Link to="/login-signup">Login</Link></li>
      </ul>
    </nav>
  );
};

export { LocationNavBar, NavBar };
