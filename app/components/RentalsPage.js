/******************************************************************************
 * Component for composing the Rentals page of the Housing section.
 ******************************************************************************/

import React from 'react';
import RentalsContainer from '../containers/RentalsContainer';
import HomepageLink from './HomepageLink';

const RentalsPage = () => {
  return(
    <div className="rentals-container">

      <div className='rentals-header'>
        <h2>Rentals</h2>
        <p className='subheader'>Rooms, basements, homes, and farm beds for rent.</p>
      </div>

      <div className='rentals-list-container'>
        <RentalsContainer />
      </div>

      <HomepageLink />

    </div>
  );
};

export default RentalsPage;
