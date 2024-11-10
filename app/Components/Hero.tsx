
import React from "react";
import Navbar from "./Navbar";
import "../Styles/hero.css";

const Hero =  ()  => {
    return(
      <div id="hero"
       className="hero-container"
       >
      <Navbar /> 
      <div className="hero-content">
        <div className="hidden lg:block"></div>


        <div className="hero-text">
          <div className="hero-msin">
            <p data-aos="zoom-in-down">I AM</p>
            <p data-aos="zoom-in-down">SAIM</p>
            <p data-aos="zoom-in-down">SHAIKH</p>
          </div>
        </div>
        
        </div>     
       </div> 
    );

};

export default Hero;