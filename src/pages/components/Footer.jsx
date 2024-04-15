import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer-body'>
      <h1 className='filler-text'>footer body</h1>
      <Link to="/about-us">link to about us</Link>
    </div>
    </>
  );
}

export default Footer;