/******************************************************************************
 * Page for composing the Community related resources.
 ******************************************************************************/

import React from 'react';
import HomepageLink from './HomepageLink';

export class CommunityPage extends React.Component {

  render() {
    return(
      <div className='community-container'>

        <div className='community-header'>
          <h2>Community Center</h2>
          <p className='subheader'>
            Events, profiles of personalities around town, and development ambitions for the greater area.
          </p>
        </div>

        <div className='community-body'>
          <i>Coming Soon!</i>
        </div>

        <HomepageLink />

      </div>
    );
  }

}

export default CommunityPage;
