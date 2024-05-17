import React from 'react';
import "./Hero.css";

const Hero = (props) => {
  const { heroimg, title, summary } = props;

  return (
    <>
      <div className='hero-div'>
        <img className='hero-img' src={heroimg} alt="Hero Image" />
        <h1 className='page-title'>{title}</h1>
        <p className='page-summary'>{summary}</p>
      </div>
    </>
  );
}

export default Hero;