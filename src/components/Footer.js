import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo2 from '../assets/DLogo3.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     <section>
        <div className="footer-logo">
          <img src={Logo2} alt= 'logo' />
        </div>
    </section>
    <section>
        <div>
          <ul className="footer-links">
            <li><a href='/'>Home</a></li>
            <li><a href='/Portfolio'>Portfolio</a></li>
            <li><a href='/Contact'>Contact Me</a></li>
            <li><a href='/About'>About Me</a></li>
          </ul>
        </div>
     </section>
     <section>
     <div>
          <ul>
            <li className="footer-social">
                <a href="https://github.com/dfuchs13" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="footer-social">
                <a href="https://www.linkedin.com/in/derekfuchsberger" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
          </ul>
        </div>
     </section>
    </footer>
  );
};

export default Footer;