import React from 'react';
import './WhyCourse.css'; // Link to your CSS file

const Feature = ({ number, title, description }) => (
  <div className="col-md-6 feature">
    <div className='number'>
      <h3>{number}</h3>
    </div>
    <div className="feature-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const WhyCLC = () => {
  const features = [
    {
      number: '01',
      title: 'Personal Attention',
      description:
        'Learn English directly from your mentor, one-on-one. Boost up your language skills with our online English speaking courses, where personal attention is our priority.',
    },
    {
      number: '02',
      title: 'Learn Anywhere',
      description:
        'You can learn from any part of the world at your convenience, anytime. Learn from our spoken English classes in Malayalam & English and start your online English learning journey with us today!',
    },
    {
      number: '03',
      title: 'Audio-Driven',
      description:
        'Immerse yourself in English learning with our audio-driven spoken English classes online. Learn better with audio-based lessons to understand language deeply and speak like a pro.',
    },
    {
      number: '04',
      title: 'Immersive Experience',
      description:
        'Shrug off your boredom with an immersive experience that makes language learning fun, effective, and exciting. Learn our offline & online English speaking course with ease.',
    },
    {
      number: '05',
      title: 'Comprehensive Course',
      description:
        'Our course covers everything - from grammar and vocabulary to accent and pronunciation, and comes with lifetime accessibility. Join our online English speaking course and gain the confidence and skills needed to excel in English.',
    },
  ];

  return (
    <section className="section-feature" id="why-clc">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2>
              <strong color='#'>Why</strong> CLC?
            </h2>
          </div>
        </div>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="row" key={index}>
              <Feature
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCLC;
