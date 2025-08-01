import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container"> 
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link poppins-regular">Home</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link poppins-regular">Skills</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link poppins-regular">Contact Me</NavLink>
            </li> 
          </ul> 
        </header> 
      </div>
    );
  }
}

export default Navbar;