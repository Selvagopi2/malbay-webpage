import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
       <Link to="/" className="navbar-logo">
        <span>MalBay Express</span>
      </Link>
      <ul className="navbar-menu">
        <li className='nav-item'>
          <Link to="/" onClick={() => handleItemClick('Home')} className={activeItem === 'Home' ? 'active' : ''}>
            HOME
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/about" onClick={() => handleItemClick('About')} className={activeItem === 'About' ? 'active' : ''}>
            ABOUT
          </Link>
        </li>
        <li className='nav-item'> 
          <Link to="/services" onClick={() => handleItemClick('Services')} className={activeItem === 'Services' ? 'active' : ''}>
            SERVICES
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/locations" onClick={() => handleItemClick('Locations')} className={activeItem === 'Locations' ? 'active' : ''}>
            LOCATIONS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" onClick={() => handleItemClick('Contact')} className={activeItem === 'Contact' ? 'active' : ''}>
            CONTACT
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/fleets" onClick={() => handleItemClick('Fleets')} className={activeItem === 'Fleets' ? 'active' : ''}>
            FLEETS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/pricing" onClick={() => handleItemClick('Pricing')} className={activeItem === 'Pricing' ? 'active' : ''}>
            PRICING
          </Link>
        </li>
        <li>
        
        <Link to="/booknow">
          <button className='book-now-button'>BOOK NOW</button>
        </Link>
        </li>
      </ul>
     
    </nav>
  );
}

export default Navbar
