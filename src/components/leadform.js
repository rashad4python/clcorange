import React from 'react';
import './LeadForm.css';

const LeadForm = () => {
  return (
    <section className="lead-form-section">
      <div className="lead-form-container">
        <div className="lead-form-heading">
          <h2>Got any questions or <strong><span className="gradient-text">messages</span></strong> for us?</h2>
          <h3>Get in touch with us now to join the best English-speaking course</h3>
        </div>
        
        <form className="lead-form" method="post">
          <div className="lead-form-row">
            <div className="form-group">
              <input type="text" name="first_name" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <input type="text" name="second_name" placeholder="Second Name" required />
            </div>
          </div>

          <div className="lead-form-row">
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone" required pattern="[0-9()#&+*-=.]+" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>

          <div className="form-group">
            <textarea name="message" rows="4" placeholder="Message" required></textarea>
          </div>

          <div className="form-group-submit">
            <button type="submit" className="lead-form-submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
