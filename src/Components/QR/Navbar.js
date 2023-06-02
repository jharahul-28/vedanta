import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navContainer'>
        <h2>VEDANTA</h2>
        <div className="navElements">
          <ul>
            <li>ABOUT</li>
            <li>DOCUMENTS</li>
            <li>DESCRIPTION</li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
