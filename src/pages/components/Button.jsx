import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ buttonText, linkTo }) => {
  return (
    
    <Link className='button-link' to={linkTo}>
        <div className='button'>{buttonText}</div>
    </Link>
  );
}

export default Button;
