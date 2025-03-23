import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/DLogo.png'

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Home link on the left */}
        <div className="logo">
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
             <img src={Logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Menu icon for mobile */}
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Right-aligned navigation links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/Portfolio" className="nav-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="social">
            <a href="https://github.com/dfuchs13" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="social">
            <a href="https://www.linkedin.com/in/derekfuchsberger" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
