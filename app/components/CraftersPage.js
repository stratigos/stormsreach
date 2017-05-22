/******************************************************************************
 * Page to list available Crafter Avatars.
 ******************************************************************************/

import React from 'react';
import CraftersContainer from '../containers/CraftersContainer';
import HomepageLink from './HomepageLink';

const CraftersPage = () => {
  return(
    <div className='crafters-container'>

      <div className='crafters-header'>
        <h2>Crafters of Storm's Reach</h2>
      </div>

      <div className='crafters-body'>
        <CraftersContainer />
      </div>

      <HomepageLink />

    </div>
  );
};

export default CraftersPage;
