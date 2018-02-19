/******************************************************************************
 * Page to list live updates from SoTA Elastic Search queries.
 ******************************************************************************/

import React from 'react';
// import DispatchContainer from '../containers/DispatchContainer';
import HomepageLink from './HomepageLink';

const DispatchPage = () => {
  return(
    <div className='dispatch-container'>

      <div className='dispatch-header'>
        <h2>Live News and Events of Storm's Reach</h2>
      </div>

      <div className='dispatch-body'>
        UNDER CONSTRUCTION - LIVE NEWS UPDATES COMING SOON!
        {/*
          <DispatchContainer />
        */}
      </div>

      <HomepageLink />

    </div>
  );
};

export default DispatchPage;
