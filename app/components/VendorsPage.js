/******************************************************************************
 * Component for composing the Vendors page, with a list of Vendors.
 ******************************************************************************/

import React from 'react';
import VendorsContainer from '../containers/VendorsContainer';
import HomepageLink from './HomepageLink';

const VendorsPage = () => {
  return(
    <div className="vendors-container">

      <div className='vendors-header'>
        <h2>Vendors</h2>
        <p className='subheader'>The best wares around the Bay of Storms.</p>
      </div>

      <div className='vendors-list-container'>
        <VendorsContainer />
      </div>

      <HomepageLink />

    </div>
  );
};

export default VendorsPage;
