import React from 'react';
import './Contect.css';
import { FaGithub, FaHome } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contect = () => {
  return (
    <section id="contact" className="contact-section reveal-up">
      <div className="contact-container">

        {/* Left Side: Info */}
        <div className="contact-left">
          <div className="contact-header">
            <span className="badge">LET'S CONNECT</span>
            <h2>Reach Out to Us</h2>
            <p>Have a project in mind, want to collaborate, or just want to say hello? Reach out through any of these channels.</p>
          </div>

          <div className="info-cards-container">
            <div className="glow-card info-card">
              <div className="icon-box"> <IoIosMailUnread /></div>
              <div className="info-content">
                <span className="info-value">sahunami843525@gmail.com</span>
              </div>
            </div>
            <div className="glow-card info-card">
              <div className="icon-box"><FaGithub /></div>
              <div className="info-content">
                <span className="info-value">
                  <a href="https://github.com/Kamni-Sahu369" target="_blank" rel="noopener noreferrer">https://github.com/Kamni-Sahu369</a>
                </span>
              </div>
            </div>

            <div className="glow-card info-card">
              <div className="icon-box"><IoCall /></div>
              <div className="info-content">
                <span className="info-value">+91 8435257954</span>
              </div>
            </div>

            <div className="glow-card info-card">
              <div className="icon-box"><FaHome /></div>
              <div className="info-content">
                <span className="info-value">Raipur, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glow-card form-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="message goes here..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contect;