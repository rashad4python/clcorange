import React from 'react';
import './welcome.css'; // Make sure to link to the CSS file

const Welcome = () => {
  return (
    <div className="clc-intro-container">
      <div className="clc-intro-text">
        <h2>Welcome to CLC</h2>
      <div className='welcometext'>
        <p>
            At CLC, we are dedicated to empowering individuals to excel in their learning journey.
            Join us today and take your first step towards mastering new skills with personalized mentorship and
            flexible learning options.
        </p>

      </div>
      </div>
    </div>
  );
};

export default Welcome;
