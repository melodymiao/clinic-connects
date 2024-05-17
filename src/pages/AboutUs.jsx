import React from "react";
import "./AboutUs.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import Footer from "./components/Footer";
import SamplePageHero from '../assets/sample page hero.png'
import lavanya from "../assets/lavanya.png";
import udaiyaa from "../assets/udaiyaa.png";
import meera from "../assets/meera.png";
import karen from "../assets/karen.png";
import anju from "../assets/anju.png";


const AboutUs = () => {
  return (
    <>
      <Header currentPage="about-us" />
      <Hero heroimg={SamplePageHero} title="About Us" summary="learn how to get involved and meet our team!" />

      <div class="involvement-block">
        <h2 className="section-title">Get Involved!</h2>
        <h3 className='section-subtitle red'>Meetings: Wednesdays 6-7 PM | Dwinelle</h3>
        <p className="paragraph-text ">
          Want to join our team? Join one of our ClinicConnects meetings to meet our team and get involved!
        </p>
        <p className="paragraph-text"><b>Questions?</b> Contact us: <a className="paragraph-email red" href="mailto:clinicconnects@berkeley.edu">clinicconnects@berkeley.edu</a></p>
      </div>

      <div className="section centered">
        <h2 className="section-title">Officers</h2>

        <div class="officer-card-line">
          <AboutCard cardimg={lavanya} name='LAVANYA' title='PRESIDENT' year='?' major='MCB & Public Health' whyinvolved='this is why I got involved!' />
          <AboutCard cardimg={udaiyaa} name='UDAIYAA' title='VICE PRESIDENT' year='?' major='Microbial Biology' whyinvolved='this is why I got involved!' />
          <AboutCard cardimg={meera} name='MEERA' title='TREASURER' year='?' major='MCB' whyinvolved='this is why I got involved!' />
        </div>

        <div class="officer-card-line">
          <AboutCard cardimg={karen} name='KAREN' title='SECRETARY' year='?' major='MCB Genetics' whyinvolved='this is why I got involved!' />
          <AboutCard cardimg={anju} name='ANJU' title='PUBLICITY' year='?' major='MCB Dev. Gen.' whyinvolved='this is why I got involved!' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;