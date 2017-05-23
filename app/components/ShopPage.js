/******************************************************************************
 * Component for composing the Shop page.
 ******************************************************************************/

import React from 'react';
import ShopContainer from '../containers/ShopContainer';
import HomepageLink from './HomepageLink';

const ShopPage = (props) => {
  return(
    <div className='shop-container'>
      <ShopContainer shopId={Number(props.match.params.shopId)} />
      <HomepageLink />
    </div>
  );
};

export default ShopPage;
