import React from 'react';
import { Link } from 'react-router-dom';
import ClinicConnectsLogo from '../../assets/clinicconnects.png'
import './Header.css';

const Header = ({ currentPage }) => {
  return (
    <div className="header-body">
      <div id="header">
        <a href="#" className="flex-item"><img className='clinic-connects-logo' src={ClinicConnectsLogo} alt="clinicconnects" /></a>
        <ul className="navbar flex-item">
          <li className="nav-item">
            <Link to="/sample" className={`nav-link ${currentPage === "sample" ? "bold" : ""}`}>Sample Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${currentPage === "home" ? "bold" : ""}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className={`nav-link ${currentPage === "about-us" ? "bold" : ""}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/connections" className={`nav-link ${currentPage === "connections" ? "bold" : ""}`}>Connections</Link>
          </li>
          <li className="nav-item">
            <Link to="/sectors" className={`nav-link ${currentPage === "sectors" ? "bold" : ""}`}>Sectors</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className={`nav-link ${currentPage === "contact-us" ? "bold" : ""}`}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
