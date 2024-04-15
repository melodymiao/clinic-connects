import { Routes, Route } from "react-router-dom";
import Sample from './pages/SamplePage'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Connections from './pages/Connections'
import Sectors from './pages/Sectors'
import ContactUs from './pages/ContactUs'
import './App.css'

//import styled from 'styled-components';


function App() {

  return (
    <>
      <Routes>
        {/* Sample Page */}
        <Route path="/sample" element={<Sample />} />

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Connections */}
        <Route path="/connections" element={<Connections />} />

        {/* Sectors */}
        <Route path="/sectors" element={<Sectors />} />

        {/* Contact Us */}
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default App

