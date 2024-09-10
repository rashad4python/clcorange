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
                  src="../images/models.png"
                  alt="joinnow"
                  className="model"
                />
        </div>

        {/* Text Container */}
        <div className="text-container">
          <h2 className="joinnow-heading">We take only Limited students every month </h2>
          <h2 className="joinnow-subheading">Book your seats</h2>
          <span className="joinnow-availability">Be it IELTS | OET | PTE | German</span>
          <div className="whatsapp-button-wrapper">
            <a
              href="https://wa.me/+919605833311"
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
