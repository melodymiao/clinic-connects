import React from "react";
import "./Sectors.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SamplePageHero from '../assets/sample page hero.png'

const Sectors = () => {
  return (
    <>
    <Header currentPage="sectors" />
    <Hero heroimg={SamplePageHero} title="Page Title" summary="this is the summary of this page" />
    <div className="section">
      <h2 className="section-title">Section Title</h2>
      <p className="paragraph-text">Be sure to wrap each of your sections in a div with the class "section"!</p>
      <p className="paragraph-text">
          This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text.
          This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default Sectors;