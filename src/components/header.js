
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './header.css';


import React, { useState, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);  // Define the menuRef her

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu's open/close state
    
  };


  return (
    <header className="header">
    <div className="header-container">
      {/* Logo */}
      <div className="logo-container">
        <StaticImage
          src="../images/CLC_Logo_hori.png"
          alt="CLC Logo"
        />
      </div>

      <div className="header-right">
        {/* Call Now Button */}
        <div className="call-now-container">
          <a href="tel:+1234567890" className="call-now-button">Call Now</a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-container">
          <button
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
              >
                <span className="menu-toggle-bar menu-toggle-bar--top"></span>
                <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
                <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
          </button>
        </div>
      </div>
    </div>

    {/* Navigation Menu */}
    <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about-us" className="nav-link" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/courses" className="nav-link" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/level-test" className="nav-link" onClick={toggleMenu}>Level Test</Link></li>
          <li><Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/videos" className="nav-link" onClick={toggleMenu}>Videos</Link></li>
          <li><Link to="/contact-us" className="nav-link" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
    </nav>
    </header>
  );
};

export default Header;
