import React from 'react';
import SamplePageHero from '../../assets/sample page hero.png'
import "./AboutCard.css";

const Hero = (props) => {
  const { cardimg, name, title, year, major, whyinvolved } = props;

  return (
    <>
      <div className='card-div'>
        <img className='officer-img' src={cardimg} alt="Officer Image" />
        <h1 className='card-name'>{name}</h1>
        <p className='card-button'>{title}</p>
        <p className='bio-space'><b>Year:</b> {year}</p>
        <p className='bio-space'><b>Major:</b> {major}</p>
        <p className='bio-space why-involved'>"{whyinvolved}"</p>
      </div>
    </>
  );
}

export default Hero;