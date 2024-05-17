import React from "react";
import "./ConnectionsSectors.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Button from "./components/Button";
import ImageText from "./components/ImageText";
import ImageTextButton from "./components/ImageTextButton";
import Footer from "./components/Footer";
import Recare from '../assets/recare.png'
import Women from '../assets/women.png'
import Clinic from '../assets/clinic.png'
import SamplePageHero from '../assets/sample page hero.png'

const Connections = () => {
  return (
    <>
      <Header currentPage="connections" />
      <Hero heroimg={SamplePageHero} title="Connections" summary="explore the connections our organization focuses on!" />
      
      <div className="section centered">
        <ImageTextButton 
        sector="Re-Cares" 
        sectordescription="ReCARES is a small volunteer-run environmental and community service non-profit organization. We aim to increase access to medical equipment and supplies while reducing unnecessary environmental waste." 
        sectorimg={Recare} />
        <div className="line"></div>

        <ImageTextButton sector="FPA Women's Health" 
        sectordescription="Since the practice’s inception in 1969, Family Planning Associates Medical Group, now FPA Women’s Health, has been providing the highest standard of medical care for women in a warm, caring environment." 
        sectorimg={Women} />
        <div className="line"></div>

        <ImageText 
        sector="Coming Soon" 
        sectordescription="We plan to contact local clinics and evaluate future actions from there onwards" 
        sectorimg={Clinic} />

      </div>

      <Footer />
    </>
  );
};
export default Connections;