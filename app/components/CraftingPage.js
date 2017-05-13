/******************************************************************************
 * Component for composing the Crafting / Crafters page.
 ******************************************************************************/

import React from 'react';
import CraftersContainer from '../containers/CraftersContainer';

const CraftingPage = () => {
  return(
    <div className="crafting-container">

      <div className='crafting-header'>
        <p>
          Coming soon: a complete page devoted to the gatherers, refiners, and crafters in the area.
        </p>
        <p>
          Find out what goods and raw materials are available, and let the market know what youre looking for.
        </p>
      </div>

      <div className='crafters-container'>
        <h2>Crafters of Storm's Reach</h2>
        <CraftersContainer />
      </div>

    </div>
  );
};

export default CraftingPage;
