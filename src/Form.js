import React, { useState } from 'react';
import './Form.css'; // Import your CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <div className="content">
        <h1>Welcome to Our Service</h1>
        <p>We are here to assist you. Please fill out the form on the right to get in touch.</p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <p className='heading'>Contact Us</p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Choose Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="service">Service Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-buttons">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
