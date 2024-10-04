// src/Footer.js
import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>NSDCA INDIA</p>
                    <p>State Programme Office:</p>
                    <p>Reyal Regency Complex, No-102, Pycrofts Road, Royapet, Chennai-14, Tamil Nadu, India.</p>
                    <p>WhatsApp Only:</p>
                    <p>+91 9500 400 262</p>
                    <p>Email: <a href="mailto:info@nsdca.ind.in">info@nsdca.ind.in</a></p>
                </div>
                <div className="footer-column">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="/">Home Page</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/terms">Terms and Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/disclaimer">Disclaimer</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Projects</h3>
                    <p>Skill Development Project</p>
                    <p>Mar 22, 2020</p>
                    <p>Zonal Service Head Officer</p>
                    <p>Mar 16, 2020</p>
                    <p>Administrative Officer</p>
                    <p>Mar 19, 2021</p>
                </div>
                <div className="footer-column">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 11.00 am - 3.00 pm</p>
                    <p>Saturday & Sunday: Closed</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Design By Krib's. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
