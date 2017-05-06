import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SFC to display a link to the homepage, centered in the middle of the screen.
 */
const HomepageLink = () => {
  return (
    <div className='homepage-link-container'>
      <Link className='homepage-link' to='/'>
        Recall Home
      </Link>
    </div>
  );
}

export default HomepageLink;
