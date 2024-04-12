import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <>
    <h1>header</h1>
    <Link to="/about-us">link to about us</Link>
    </>
  );
}

export default Header;
