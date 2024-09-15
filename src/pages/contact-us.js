import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission with Formspree, Netlify, or your own server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Layout>
      <Seo title="Contact Us | CLC" />
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>
          To learn more about our English Language Programs like Spoken English
          Classes, IELTS, OET, and PTE at CLC, feel free to call or email us at{" "}
          <a href="mailto:clcalicut@gmail.com">clcalicut@gmail.com</a>. We will
          be happy to answer any questions you might have.
        </p>

        <h2>Kozhikode Branch</h2>
        <p>
          Creative Learning Center (CLC) <br />
          2nd floor, Majestic Centre <br />
          Near Baby Memorial Hospital <br />
          Arayidathupalam, Kozhikode 673004 <br />
          <a href="tel:+919605833311">+91 9605833311</a> <br />
          <a href="mailto:clcalicut@gmail.com">clcalicut@gmail.com</a>
        </p>

        <h2>Manjeri Branch</h2>
        <p>
          First Floor, Door No. 33/276-287-293 <br />
          Citypoint Mall, Calicut Road <br />
          Manjeri 676121 <br />
          <a href="tel:+917593005600">+91 75930 05600</a> <br />
          <a href="mailto:clcmanjeri007@gmail.com">clcmanjeri007@gmail.com</a>
        </p>

        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
