import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all products. Please ensure the product is in its original condition.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact us via email at support@example.com or call us at (123) 456-7890.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on the destination.'
    }
  ];

  return (
    <section id="faq-section">
      <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
