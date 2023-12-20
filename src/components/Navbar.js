import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BiChevronLeft, BiCog, BiMicrophone, BiMoon,
} from 'react-icons/bi';
import '../style/navbar.css';

function Navbar({ selectedCountry }) {
  const [theme, setTheme] = useState('light');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#0e9c9c';
    } else {
      setTheme('light');
      document.body.style.color = '#202c37';
      document.body.style.backgroundColor = '#202c37';
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <ul className="navbar">
      <li className="nav-item">
        {isHomePage ? (
          <div className="year-back">
            <BiChevronLeft className="back-icon" />
            <p className="year">{currentYear}</p>
          </div>
        ) : (
          <Link to="/">
            <BiChevronLeft className="back-icon" />
          </Link>
        )}
      </li>
      <li className="nav-item">
        {selectedCountry ? (
          <h2>{selectedCountry}</h2>
        ) : (
          <h2>Countries</h2>
        )}
      </li>
      <li>
        <ul className="nav">
          <li className="nav-item">
            <BiMicrophone className="icons" />
          </li>
          <li className="nav-item">
            <BiCog className="icons" />
          </li>
          <button type="button" className="nav-item" onClick={handleTheme}>
            <BiMoon className="icons" />
          </button>
        </ul>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  selectedCountry: PropTypes.string,
};

Navbar.defaultProps = {
  selectedCountry: '',
};

export default Navbar;
