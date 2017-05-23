/******************************************************************************
 * Component for composing the Vendor page.
 ******************************************************************************/

import React from 'react';
import VendorContainer from '../containers/VendorContainer';
import HomepageLink from './HomepageLink';

const VendorPage = (props) => {
  return(
    <div className='vendor-container'>
      <VendorContainer vendorId={Number(props.match.params.vendorId)} />
      <HomepageLink />
    </div>
  );
};

export default VendorPage;
