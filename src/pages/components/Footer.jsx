import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import textImage from '../../assets/clinicconnects.png'

import './Footer.css';

const Footer = ({ currentPage }) => {
  return (
    <>
    <div className='footer-body'>
      <div className='footer-images'>
        <div><img className='lightbulb-img' src={logoImage} alt="lightbulb text" /></div>
        <div><img className='text-img' src={textImage} alt="clinicconnects" /></div>
      </div>
      <div className='linkbox'>
        <ul className="links">
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
        </ul>
        <ul className="links">
          <li className="nav-item">
            <Link to="/contact-us" className={`nav-link ${currentPage === "contact-us" ? "bold" : ""}`}>Contact Us</Link>
          </li>
          <li className="nav-item"><a className='links' href="mailto:clinicconnects@berkeley.edu">clinicconnects@berkeley.edu</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Footer;