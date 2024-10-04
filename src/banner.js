import React, { useEffect, useState } from 'react';
import logo from "./G20-SUMMIT--15_1694232912893_1694232945466 modi.avif"
import modis from "./images.jpg"
import './banner.css'; // Import your CSS file
import image from './538815.gif'
import book from "./book.png"
import student from "./graduate.png"
import boys from "./499037.png"
import modi from "./download.jpg"
import SlidingCarousel from './SlidingCaraousel';
import ContactForm from './Form';


const Banner = () => {
  const contentList = [
    "Welcome to our website!",
    "Check out our latest features!",
  ];
  

  const [currentContent, setCurrentContent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeToTerms: false,
  });
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);
  };




  return (
    <div className="banner">
      <div class="images">
        <img src={logo} alt="Description of the image" className='images' ></img>
        <div class="paragraph">
          <p className='paragraph'>{contentList[currentContent]}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="padding">
              <img src={image} className="logo" alt="Logo" />
              <p>Online Approval/Affiliation</p>
            </div>
          </div>
          <div className="column">
            <img src={book} className="logo" alt="Logo" />
            <p>Institute/College/VTC Zone</p>
          </div>
          <div className="column">
            <img src={student} className="logo" alt="Logo" />
            <p>Students Zone</p>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="column">
            <div className="padding">
              <img src={boys} className="boys" alt="Logo" />
              {/* <p>Online Approval/Affiliation</p> */}
            </div>
          </div>
          <div className="column">
            <h3>WELCOME TO N.S.D.C.A INDIA</h3>
            <p>N.S.D.C.A is a statutory autonomous body, NON Governmental Organization, Registered under the Government of Tamilnadu, Planning Commission, Government of India and Ministry of Human Resource Development, Government of India. Established under article.29 & 30(1) Constitution of India and Incorporated Under the legislation of Ministry of Corporate Affairs, Government of India</p>
            <button>Register</button>
          </div>
         
          <div className="column">
            <h3>Student Admission 2024</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the terms and conditions
              </label>
              <button type="submit">Register</button>
            </form>
          </div>

        </div>
      </div>
      <h1>Popular Courses
        Choose Your Desired Course

      </h1>
      
      <SlidingCarousel></SlidingCarousel>
      <ContactForm></ContactForm>


    </div>







  );
};

export default Banner;
