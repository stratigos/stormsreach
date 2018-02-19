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
        <h2>News and Happenings of Storm's Reach</h2>
      </div>

      <div className='dispatch-body'>
        DUMMY CONTENT
        {/*
          <DispatchContainer />
        */}
      </div>

      <HomepageLink />

    </div>
  );
};

export default DispatchPage;
