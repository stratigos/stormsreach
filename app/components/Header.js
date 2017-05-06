import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import NavProfile from './NavProfile';

/**
 * SFC for displaying site branding / logo within the Header.
 */
const Branding = () => {
  return(
    <Link className='button' to='/'>
      <h4>SR</h4>
    </Link>
  );
}

/**
 * Stateless Functional Component to display branding, Nav, and other elements
 *  at the top of the page.
 */
const Header = () => {
  return(
    <div className='header-container'>
      <div className='branding-container'>
        <Branding />
      </div>
      <div className='nav-container'>
        <Nav />
      </div>
      <div className='user-container'>
        <NavProfile />
      </div>
    </div>
  );
}

export default Header;
