import React from "react";
import "./SamplePage.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Sample = () => {
  return (
    <>
    <Header currentPage="sample" />
    <Hero title="Page Title" summary="this is the summary of this page" />
    <div className="section">
        <h2 className="section-title">Section Title</h2>
        <p className="paragraph-text">Be sure to wrap each of your sections in a div with the class "section"!</p>
        <p className="paragraph-text">
            This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text.
            This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text. This is a paragraph text.
        </p>
    </div>
    <div className="section centered">
        <h2 className="section-title">Section Title</h2>
        <p className="paragraph-text">This section is centered! This section is a flexbox that is centered. Remember to add both classes "section centered"</p>
    </div>
    <div className="section">
        <h3 className='section-subtitle'>Section Subtitle</h3>
        <p className="paragraph-text">Have subtitles on the page? Use the section subtitle!</p>
    </div>
    
    
    <Footer />
    </>
  );
};

export default Sample;