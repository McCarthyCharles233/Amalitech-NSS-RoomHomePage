import React, { useState } from 'react';
import hamburger from '../Images/hamburger.png';
import close from '../Images/close.png';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
        <span className="hamburger" onClick={toggleDropdown}>
          <img src={hamburger} alt="hamburger menu" />
        </span>
        <span className="logo">
            <a href="#">room</a>
        </span>
        <span className="nav-links">
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </span>
        <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
          <div className="dropdown-content">
            <div className="close" onClick={toggleDropdown}>
              <img src={close} alt="close dropdown" />
            </div>
            <div>
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a> 
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
