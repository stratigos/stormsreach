import React from 'react';
import PropTypes from 'prop-types';

/**
 * Higher Order Container Component for "home page" Components.
 */
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      placeholderProp: props.placeholderProp
    };
  }

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
          <img
            src={'http://res.cloudinary.com/stormsreach/image/upload/c_scale,e_saturation:100,w_465/v1494083455/stormsreach_sotamap_z5_u5xhji.png'}
            alt={'Storm\'s Reach on sotamap.com'}
            title={'Storm\'s Reach'}
          />
        </div>
        <div className='homepage-content'>
          <p>
            {this.state.placeholderProp} Welcome to stormsreach.com! The online resource for the greater Bay of Storms
            and Elysium isles area.
          </p>
          <p>
            You smell like a human do they understand me foe of my foe until later then. Greater Heal Bard i will go
            first until next we meet. The best Drow is a dead Drow do they understand me lightning i have an idea no
            idea. Night Sight i yield Oh! him, his. Hold person hold onto this for me do you promise Lovely ones.
          </p>
          <p>
             Southwall memorize your spells here cone of cold Sunrise elf. Sunrise elf sleep my lord non familiar My
             friend. Invisibility Silent ones are you finished unlock. Cowardly dogs Friday greater heal sleep well.
             Who's leading Dark ones My friend Summer Solstace.
          </p>
          <p>
             Good night long journey Wise ones my heart sings to see thee. Excessive ones i have an idea no idea mass
             dispel East. Teleport cloudkill Winter Solstice Silver elf. I love you paralyze field minor globe ice
             storm. Give it to me summon air elemental West The Harpers HG.
          </p>
        </div>
      </div>
    );
  }

}

Home.propTypes = {
  placeholderProp: PropTypes.string.isRequired
};

Home.defaultProps = {
  placeholderProp: 'Howdy!'
};

export default Home;
