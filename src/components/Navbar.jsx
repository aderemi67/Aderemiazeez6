import React,  { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu for mobile view
   const toggleMenu = () =>  {
     setIsOpen(!isOpen);
   };
   const closeMenu = () => {
     setIsOpen(false);
   };
    return (
        <nav className="navbar">
          <div className="logo">Aderemi Azeez</div>  

          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
            </div>   

            {/* Nav Links */}
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;