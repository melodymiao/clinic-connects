import React from 'react';
import "./Hero.css";

const Hero = (props) => {
  const { title, summary } = props;

  return (
    <>
      <div className='hero-div'>
        <h1 className='page-title'>{title}</h1>
        <p className='page-summary'>{summary}</p>
      </div>
    </>
  );
}

export default Hero;