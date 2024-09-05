import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './header.css'; // Importing global CSS for extra styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo on the right side */}
        <div className="logo-container">
          <StaticImage
            src="../images/CLC_Logo_hori.png"
            alt="CLC Logo"
            // class='logo'
          />
        </div>
        <div className='header-right'>
          {/* Centered Call Now Button */}
          <div className="call-now-container">
            <a href="tel:+1234567890" className="call-now-button">Call Now</a>
          </div>
          {/* Container for Hamburger Menu */}
          <div className="hamburger-container">
            <button
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
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
      <div className='nav'><nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <ul className="nav-links">
          <li className='link'><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
          <li className='link'><Link to="/about-us" className="nav-link" onClick={toggleMenu}>About Us</Link></li>
          <li className='link'><Link to="/courses" className="nav-link" onClick={toggleMenu}>Courses</Link></li>
          <li className='link'><Link to="/level-test" className="nav-link" onClick={toggleMenu}>Level Test</Link></li>
          <li className='link'><Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link></li>
          <li className='link'><Link to="/videos" className="nav-link" onClick={toggleMenu}>Videos</Link></li>
          <li className='link'><Link to="/contact-us" className="nav-link" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
