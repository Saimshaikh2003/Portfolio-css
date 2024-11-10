import React from "react";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
import { useState } from "react";
import "../styles/navbar.css"

const Navbar = () => {
const[isMenuOpen , setIsMenuOpen] = useState (false)

const  toggleMenu = ()  =>{
    setIsMenuOpen(!isMenuOpen)
}

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-brand">SAIM SHAIKH</div>


                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <li className="navbar-link">
                        <a href="#hero">Home</a></li>
                    <li className="menuLink"><a href="#about">About</a>
                    </li>
                    <li className="navbar-link">
                        <a href="#projects">Projects</a></li>
                    <li className="navbar-link">
                        <a href="#skills">Skills</a>
                        </li>
                    <li className="navbar-link">
                        <a href="#contact ">Contact</a>
                        </li>
                </ul>
                <div className="navbar-menu-icon" onClick={toggleMenu}>
                    {isMenuOpen  ? <AiOutlineClose size={30}   /> : <AiOutlineMenu size={30} /> }
                </div>
                 </div>

                 {isMenuOpen &&(
                    <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                        <li className="navbar-link">
                             <a href="#hero" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="navbar-link">
                             <a href="#about" onClick={toggleMenu}>About</a>
                        </li>
                        <li className="navbar-link">
                             <a href="#projects" onClick={toggleMenu}>Projects</a>
                        </li>
                        <li className="navbar-link">
                             <a href="#skills" onClick={toggleMenu}>Skills</a>
                        </li>
                        <li className="navbar-link">
                             <a href="#contact" onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                 )
                 }

        </div>
    );
};

export default Navbar;