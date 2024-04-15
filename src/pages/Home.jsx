import React from 'react';
import './Home.css';
import Header from './components/Header'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <h1 className='page-title'>Home Page</h1>
    <Footer />
    </>
  );
}

export default Home;