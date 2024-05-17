import React from "react";
import img1 from "../assets/volunteer.png"
import img2 from "../assets/outreach.png"
import img3 from "../assets/publicity.png"
import img4 from "../assets/research.png"
import SamplePageHero from '../assets/sample page hero.png'
import "./ConnectionsSectors.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Button from "./components/Button";
import ImageText from "./components/ImageText";
import Footer from "./components/Footer";

const Sectors = () => {
  return (
    <>
      <Header currentPage="sectors" />
      <Hero heroimg={SamplePageHero} title="Sector" summary="explore the different sectors you can take part in!" />
      
      <div className="section centered">
        <ImageText sector="Volunteer" sectordescription="A sector in the club for volunteers who can serve clinics who need more personnel in some way" sectorimg={img1} />
        <div className="line"></div>

        <ImageText sector="Outreach" 
        sectordescription="Finds local clinics to coordinate/partner with. Forms connections with other clubs to find more resources for the clinics" 
        sectorimg={img2} />
        <div className="line"></div>

        <ImageText 
        sector="Publicity" 
        sectordescription="Club Presence→ Website; Instagram; Flyers; News Publicity" 
        sectorimg={img3} />
        <div className="line"></div>

        <ImageText 
        sector="Research" 
        sectordescription="Looks into general/local resources that we can provide to clinics when meeting them" 
        sectorimg={img4} />
        <div className="line"></div>

        <div className="bottomtext">
          <h3 className='section-subtitle'>Want to join the community?</h3>

          {/* link interest form inside the "" of linkTo */}
          <Button buttonText="Interest Form" linkTo=""/>

        </div>
      </div>

      <Footer />
    </>
  );
};
export default Sectors;