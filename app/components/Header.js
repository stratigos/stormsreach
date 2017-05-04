import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

/**
 * SFC for displaying site branding / logo within the Header.
 */
const Branding = () => {
  return(
    <h4>SR</h4>
  );
}

/**
 * Stateless Functional Component to display branding, Nav, and other elements
 *  at the top of the page.
 */
const Header = () => {
  return(
    <div className="header-container">
      <div className="branding-container">
        <Branding />
      </div>
      <div className="nav-container">
        <Nav />
      </div>
    </div>
  );
}

export default Header;