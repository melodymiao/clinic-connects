import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <>
    <h1>footer</h1>
    <Link to="/about-us">link to about us</Link>
    </>
  );
}

export default Footer;