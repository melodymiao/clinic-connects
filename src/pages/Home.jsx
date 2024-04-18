import React from 'react';
import './Home.css';
import Header from './components/Header'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
    <Header currentPage="home" />
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
}

export default Home;