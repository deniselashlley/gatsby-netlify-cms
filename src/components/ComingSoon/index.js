import React from 'react';
import instagram from '../../img/icons/instagram-white.svg';
import email from '../../img/icons/email-white.svg';
import phone from '../../img/icons/phone-white.svg';

import "./styles.scss";

const ComingSoon = () => (
  <main className="container" role="main">
    <div className="coming-soon">
      <div className="site-brand">
        <a href="/" className="site-logo">
          <span>The Light Tree</span>
        </a>
        </div>
        <h1>Site coming soon</h1>
        <h2>Contact</h2>
        <ul className="coming-soon-contacts">
          <li className="social-icons--item">
            <a 
              href="mailto:jess@thelighttreeyoga.co.uk" 
              aria-label="email me" 
              className="icon-link"
            >
              <img src={email} alt="email me" className="icon email-icon" />
              <span>jess@thelighttreeyoga.co.uk</span>
            </a>
          </li>
          <li className="social-icons--item">
            <a 
              href="tel:07927 318 065" 
              aria-label="call me" 
              className="icon-link"
            >
              <img src={phone}  className="icon tele-icon" alt="call me" />
              <span>07927 318 065</span>
            </a>
          </li>
        </ul>
        <h2>Follow Me</h2>
        <ul className="coming-soon-contacts">
          <li className="social-icons--item">
            <a 
              href="https://www.instagram.com/the_light_tree_yoga/" 
              aria-label="follow me on instgram" 
              className="icon-link"
            >
              <img src={instagram}  className="icon icon-instagram" alt="follow me on instgram" />
            </a>
          </li>
        </ul>
    </div>
  </main>
);

export default ComingSoon