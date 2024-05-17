import React from "react";
import "./ContactUs.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners_Pic from "../assets/Contact Partners Image.jpeg";
import Volunteers_Pic from"../assets/Contact Volunteers Image.jpeg";
import Contact_Icon from "../assets/doctorandpatient.png"

const ContactUs = () => {
  return (
    <>
      <Header currentPage="contact-us" />
      <Hero heroimg={Contact_Icon} title="Contact Us" summary="we help connect local clinics to local resources that solve less-explored problems" />
      
      <div class="contact-div">
        <div class="contact-child">
         <img className="contact-pic" src={Volunteers_Pic} alt="volunteer picture"></img>
          <h1 className="for-title">For Volunteers</h1>
          <h2 className="contact-paragraph">Interested in becoming a volunteer and breaking into the healthcare industry? Join our community of like-minded individuals in solving overlooked problems in clinics.</h2>
          <a className="contact-link" href="https://www.youtube.com/watch?v=RXGqBeNvYHw">Learn More &gt;</a>
        </div>

        <div class="contact-child">
          <img className="contact-pic" src={Partners_Pic} alt="partners picture"></img>
          <h1 className="for-title">For Partners</h1>
          <h2 className="contact-paragraph">Interested in having passionate students help your organization or clinic out? By tackling your less-explored problems, connecting various resources, and finding viable methods to implement the solutions, we hope to create a positive tangible impact within our local community, for your cause. </h2>
          <a className="contact-link" href="https://youtu.be/jIQ6UV2onyI?feature=shared">Learn More &gt;</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;