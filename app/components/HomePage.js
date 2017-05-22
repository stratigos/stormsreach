import React from 'react';

/**
 * Example component which loads the text on the home page.
 */
export class HomePage extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className='homepage-container'>
        <div className='homepage-header'>
          <h1>
            <span>Storm's Reach</span>
            <small>The online resource for the Bay of Storms community.</small>
          </h1>
        </div>
        <div className="homepage-image">
          {/* Image credit: https://www.sotamap.com/ */}
          <img
            src={'http://res.cloudinary.com/stormsreach/image/upload/c_scale,e_saturation:100,w_500/v1494083455/stormsreach_sotamap_z5_u5xhji.png'}
            alt={'Storm\'s Reach on sotamap.com'}
            title={'Storm\'s Reach on SotAMap'}
          />
        </div>
        <div className='homepage-content'>
          <p>
            Hello! Welcome to stormsreach.com! The online resource for the greater Bay of Storms
            and Elysium isles area.
          </p>
          <p>
            Connect to the community by exploring available apartments, houses, basements, and farm plots. Sell
            resources, buy fabricated components, and exchange produced goods. Sell your services to the market, and
            fuel your crafting from your neighbors' gathering efforts. Whatever you do, embrace the SotA community
            around Storm's Reach!
          </p>
          <p>
            Announce events, explore community gatherings, and find adventures. If you run a tavern, operate a crafting
            center, or otherwise manage a public space in the area, advertise it here!
          </p>
        </div>
      </div>
    );
  };

};

export default HomePage;
