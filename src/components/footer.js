import React from 'react';
import './footer.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Container */}
        <div className='logo-menu'>
          <div className='footer-logo-container'>
            <div className="clc_footer_logo">
              <StaticImage src="../images/clc_logo_footer.png" alt="clc footerlogo"  />
            </div>
          </div>
          {/* Menu Navigation */}
          <div className='menu-location'>
            <nav className="footer-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
            <div className="location-container">
              <h4>Locations</h4>
              <div className="places">
                <p>Kozhikode</p>
                <p>Manjeri</p>
              </div>

              {/* Corporate Office Address */}
              <div className="footer-address">
                <p id='head'>Corporate Office:</p>
                <p>1234 Elm Street, Suite 567</p>
                <p>San Francisco, CA 94102</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Contact Container */}
          <div className="footer-contact">
            <p ><b>Email:</b> info@clccalicut.com</p>
            <p ><b>Phone Manjeri:</b> +91 9605833311</p>
            <p ><b>Phone Kozhikode:</b> +91 9605833311</p>
          </div>

          {/* About CLC Container */}
          <div className="footer-about">
            <p>
              CLC is a global institute dedicated to providing the best education for language and professional skills.
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-legal">
              <p>2022 Copyright | All Rights Reserved</p>
              <div className="footer-links">
                <Link to="/terms">Terms Of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/support">Support Centre</Link>
                <Link to="/sitemap">Sitemap</Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="/path-to-facebook-icon.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/path-to-twitter-icon.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src="/path-to-instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
