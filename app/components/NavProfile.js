import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Stateless Functional Component to display current user profile link and
 *  welcome text.
 * Note: Users and profiles TBD, current display is static text.
 */
const NavProfile = () => {
  return (
    <Link className='nav-profile' to='/profile'>
      <span>Welcome, User!</span>
    </Link>
  );
}

export default NavProfile;
