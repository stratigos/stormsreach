import React from 'react';
import Crafter from '../components/Crafter';
import { DEFAULT_CRAFTER } from '../constants/defaults';

/**
 * Higher Order Container Component for the "crafting" page.
 */
export class Crafting extends React.Component {

  render() {
    return(
      <div className='crafting-container'>
        <div>
          <p>
            Coming soon: a complete page devoted to the gatherers, refiners, and crafters in the area.
          </p>
          <p>
            Find out what goods and raw materials are available, and let the market know what youre looking for.
          </p>
        </div>

        <div className='crafters-container'>
          <h2>Crafters of Storm's Reach</h2>

          <div className='crafters-list-container'>

            <Crafter
              name={DEFAULT_CRAFTER.MY_NAME}
              home={DEFAULT_CRAFTER.HOME}
              profileImage={DEFAULT_CRAFTER.MY_PROFILE_IMAGE_SRC}
              shop={DEFAULT_CRAFTER.MY_SHOP}
              craftingAbilities={DEFAULT_CRAFTER.MY_ABILITIES}
            />

            <Crafter
              name={DEFAULT_CRAFTER.NAME}
              home={DEFAULT_CRAFTER.HOME}
              profileImage={DEFAULT_CRAFTER.PROFILE_IMAGE_SRC}
              craftingAbilities={DEFAULT_CRAFTER.ABILITIES}
            />

            <Crafter
              name={DEFAULT_CRAFTER.NAME}
              home={DEFAULT_CRAFTER.HOME}
              profileImage={DEFAULT_CRAFTER.PROFILE_IMAGE_SRC}
              craftingAbilities={DEFAULT_CRAFTER.ABILITIES}
            />

            <Crafter
              name={DEFAULT_CRAFTER.NAME}
              home={DEFAULT_CRAFTER.HOME}
              profileImage={DEFAULT_CRAFTER.PROFILE_IMAGE_SRC}
              craftingAbilities={DEFAULT_CRAFTER.ABILITIES}
            />

          </div>

        </div>
      </div>
    );
  }

}

export default Crafting;
