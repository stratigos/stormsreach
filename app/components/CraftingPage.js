/******************************************************************************
 * Component for composing the Crafting page.
 ******************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import HomepageLink from './HomepageLink';

const CraftingPage = (props) => {
  return(
    <div className="crafting-container">

      <div className='crafting-header'>

        <h2>Crafting</h2>
        <p className='subheader'>Connect to the crafting market of Storm's Reach.</p>

        <div className='coming-soon'>
          <p>
            Coming soon: a complete page devoted to the gatherers, refiners, and crafters in the area.
          </p>
          <p>
            Find out what goods and raw materials are available, and let the market know what youre looking for.
          </p>
        </div>

      </div>

      <div className='crafting-body'>



        <div className='crafting-links-container'>

          <div className='crafting-links-list crafting-links-list-left'>
            <ul>
              <li>
                <Link to={`${props.location.pathname}/crafters`}>View Crafters</Link>
              </li>
              <li>
                <Link to='/vendors'>Meet Vendors</Link>
              </li>
              <li>
                <Link to='#'>Browse Shops<br/>(<em>coming soon</em>)</Link>
              </li>
            </ul>
          </div>

          <div className='crafting-sigil-image-container'>
            {/* Image credit: https://www.shroudoftheavatar.com/ */}
            <img
              src='http://res.cloudinary.com/stormsreach/image/upload/v1495482403/sotacraft500_ygp9zu.jpg'
              alt='SotA Crafting Sigil'
              title='Shroud of the Avatar Crafting Sigil'
            />
          </div>

          <div className='crafting-links-list crafting-links-list-right'>
            <ul>
              <li>
                <Link to={`${props.location.pathname}/crafters`}>Moar Links TBD</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <HomepageLink />

    </div>
  );
};

export default CraftingPage;
