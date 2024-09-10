import React, { useEffect, useState, useRef } from 'react';
import './TopPortion.css';
import { StaticImage } from 'gatsby-plugin-image';

const TopPortion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollWrapperRef = useRef(null);
  const totalItems = 3; // Change this based on the length of the content array

  // Data for the text containers
  const content = [
    {
      text: 'IELTS ആണോ... ഇതെന്നേ സ്ഥലം ',
      smallText: 'No one will prepare you for IELTS better than us',
      link: 'https://wa.me/+919605833311?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%C2%A0course.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollWrapperRef.current) {
      if (currentIndex === totalItems) {
        scrollWrapperRef.current.style.transition = 'none';
        scrollWrapperRef.current.style.transform = 'translateX(0)';
        setTimeout(() => {
          scrollWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
          setCurrentIndex(1);
        }, 20);
      } else {
        scrollWrapperRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  }, [currentIndex]);

  return (
    <div className="topportion">
      <div className="carousel-wrapper">
        <div className="scrollable-wrapper" ref={scrollWrapperRef}>
          {content.map((item, index) => (
            <div className="topusptextcontainer" key={index}>
              <div className="nostaffimage">
                <h2 className="topusptext">
                  {item.text.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i === 0 ? <b><span className="highlight-text">{word}</span></b> : word}{' '}
                    </React.Fragment>
                  ))}
                </h2>
                <div className="topuspsmall">
                    <p>{item.smallText}</p>
                  </div>
                <div className="WhatsAppbuttontop">
                  
                  <div className="whatsapp-button-container">
                    <a className="button" href={item.link} target="_blank" rel="noopener noreferrer">
                      <span className="button-icon">
                        <i aria-hidden="true" className="fab fa-whatsapp"></i>
                      </span>
                      <span className="button-text">WhatsApp Now To Join</span>
                    </a>
                  </div>
                </div>
              </div>    
              <div className="staffimage">
                <StaticImage
                  src="../images/models.png"
                  alt="CLC Logo"
                  className="model"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPortion;
