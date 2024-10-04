// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import './navbar.css'; // Import CSS file for styling

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="navbar-buttons">
//                     <button className="navbar-button">
//                         <FontAwesomeIcon icon={faSignInAlt} />
//                         <span>Login</span>
//                     </button>
//                     <button className="navbar-button">
//                         <FontAwesomeIcon icon={faUser} />
//                         <span>Register</span>
//                     </button>
//                 </div>
//             </div>
//             <div className="navbar-menu">
//                 <a href="#home">Home</a>
//                 <a href="#who-we-are">Who We Are</a>
//                 <a href="#what-we-do">What We Do</a>
//                 <a href="#schemes">Schemes and Initiatives</a>
//                 <a href="#office">Office Useful Links</a>
//                 <a href="#registration">Registration</a>
//                 <a href="#examination">Examination & Downloads</a>
//                 <a href="#verification">Online Verification</a>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import logo from "./nsdca_logo_final.jpg"
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-buttons">
          <marquee>
          The  tag is used to create a scrolling effect for text or images. This tag can make content move left, right, up, or down, adding an interactive element to your web page.
          </marquee>

          <Link to="/login" className="navbar-button-link">
            <button className="navbar-button">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span>Login</span>
            </button>
          </Link>
          <Link to="/signup" className="navbar-button-link">
            <button className="navbar-button">
              <FontAwesomeIcon icon={faUser} />
              <span>Register</span>
            </button>
          </Link>

          {/* <button className="navbar-button">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span>Login</span>
                    </button>
                    <button className="navbar-button">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Register</span>
                    </button> */}

        </div>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-menu">
        <div className="nav-item">
          <Link to="/" className='link'>Home</Link>
          {/* <div className="dropdown-content">
            <p>Dropdown content for Home</p>
          </div> */}
        </div>
        <div className="nav-item">
          <Link to="/who-we-are" className='link'>Who We Are</Link>
          <div className="dropdown-content">
            <p>Dropdown content for Who We Are</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/what-we-do" className='link'>What We Do</Link>
          <div className="dropdown-content">
            <p>Dropdown content for What We Do</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/schemes" className='link'>Schemes and Initiatives</Link>
          <div className="dropdown-content">
            <p>Dropdown content for Schemes and Initiatives</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/office" className='link'>Office Useful Links</Link>
          <div className="dropdown-content">
            <p>Dropdown content for Office Useful Links</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/registration" className='link'>Registration</Link>
          <div className="dropdown-content">
            <p>Dropdown content for Registration</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/examination" className='link'>Examination & Downloads</Link>
          <div className="dropdown-content">
            <p>Dropdown content for Examination & Downloads</p>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/online-verification" className='link'>Online Verification</Link>
          {/* <div className="dropdown-content"> */}
          {/* <p>Dropdown content for Online Verification</p> */}
          {/* </div> */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
