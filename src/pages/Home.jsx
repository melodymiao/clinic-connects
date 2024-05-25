import React from 'react';
import './Home.css';
import bubbles from '../assets/bubbles.png';
import aboutus from '../assets/aboutus.png';
import connections from '../assets/connections.png';
import sectors from '../assets/sectors.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Carousel from './components/Carousel';


const Home = () => {


  return (
    <>
    <Header currentPage="home"/>
    <div className='top'>
      <div className='topleft'>
        <h2 className='title'>Interested in</h2>
        <h2 className='title'>Healthcare?</h2>
        <h3 className="header3"><i>Join Clinic Connects</i></h3>
      </div>
      <div className='topright'>
        <img src={bubbles} className="bubbles"/>  
      </div>
    </div>

    <div className='middle'>
      <div className='middletop'>
        <h1 className='whoweare'>Who We Are</h1>
        <p className="missionstatement">
          We want to be able to make a tangible impact, whether that is simply<br></br>
          connecting free medical resources from one distribution place to<br></br>
          another clinic, or bigger things like helping with system-wide issues<br></br>
          within the clinic itself.
        </p>
      </div>

      <div className='middlebottom'>
        <div className='aboutus'>
          <h3 className='sectionheader'>About Us</h3>
          <img src={aboutus} className="aboutus"/>
        </div> 
        <div className='connections'>
          <h3 className='sectionheader'>Connections</h3>
          <img src={connections} className="connections"/>
        </div> 
        <div className='sectors'>
          <h3 className='sectionheader'>Sectors</h3>
          <img src={sectors} className="sectors"/>
        </div>
      </div>
    </div>
    
    <div className='bottom'>
      <div>
        <Button buttonText="GET INVOLVED >" linkTo="https://www.youtube.com/" />
      </div>
      <Carousel />
    </div>
    <Footer />
    </>
  );
}

export default Home;