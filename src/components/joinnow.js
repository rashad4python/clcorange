import React from 'react';
import './joinnow.css'; // Import the corresponding CSS
import { StaticImage } from 'gatsby-plugin-image';

const JoinNow = () => {
  return (
    <section className="joinnow-section">
      <div className="joinnow-container">
        {/* Image Container */}
        <div className="image-container">
        <StaticImage
                  src="../images/model.jpg"
                  alt="CLC Logo"
                  className="model"
                />
        </div>

        {/* Text Container */}
        <div className="text-container">
          <h2 className="joinnow-heading">New Batch Starts Today</h2>
          <h2 className="joinnow-subheading">Join Now</h2>
          <span className="joinnow-availability">Only 75 seats left for our spoken English classes</span>
          <div className="whatsapp-button-wrapper">
            <a
              href="https://wa.me/+918075259662"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
