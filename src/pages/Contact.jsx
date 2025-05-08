import React from 'react';
import './Contact.css'; // assuming you’ll style separately

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-description">
          Have Questions? We're Here to Help! <br />
          Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out. <br />
          Fill out the form below or send us an email at <a href="mailto:support@sotosstore.com">support@sotosstore.com</a>. <br />
          We usually respond within 24 hours!
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Subject" required />
        </div>

        <div className="form-group">
          <textarea placeholder="Your Message" rows="6" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
