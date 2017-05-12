import React from 'react';
import HomepageLink from '../components/HomepageLink';

const NotFound = () => {
  return(
    <div className='not-found-container'>
      <div className='not-found-well'>
        <h3>Page not found!</h3>
        <p>The page you are looking for does not exist.</p>
      </div>
      <div className="not-found-homepage-link">
        <HomepageLink />
      </div>
    </div>
  );
}

export default NotFound;
