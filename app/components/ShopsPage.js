/******************************************************************************
 * Component for composing the Shops page, with a list of Shops.
 ******************************************************************************/

import React from 'react';
import ShopsContainer from '../containers/ShopsContainer';
import HomepageLink from './HomepageLink';

const ShopsPage = () => {
  return(
    <div className="shops-container">

      <div className='shops-header'>
        <h2>Shops</h2>
        <p className='subheader'>The best wares around the Bay of Storms.</p>
      </div>

      <div className='shops-list-container'>
        <ShopsContainer />
      </div>

      <HomepageLink />

    </div>
  );
};

export default ShopsPage;
