import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DEFAULT_CRAFTER } from '../constants/defaults';

/**
 * SFC to list items in list of abilities/services.
 */
const CraftingServices = (props) => {
  let abilityItems = '';
  if(props.abilities.length > 0) {
    abilityItems = props.abilities.map((ability, idx) =>
      <li key={idx} className='crafting-ability'><strong>{ability}</strong></li>
    );
  }

  return(<ul>{abilityItems}</ul>);
};

CraftingServices.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string)
};

/**
 * SFC to optionally display Avatar's shop.
 */
const AvatarShop = (props) => {
  // Display the Avatar's shop, if one is provided.
  let shop = '';
  if(props.shop) {
    shop = ['Shop: ', <strong>{props.shop}</strong>];
  }

  return(<span>{shop}</span>);
};

AvatarShop.propTypes = {
  shop: PropTypes.string
};

/**
 * SFC to optionally display Avatar's hometown as a link to sotamap.com, or
 *  just the name of the town.
 */
const AvatarTown = (props) => {
  let homeVal = ['Home: ', <strong>{props.home}</strong>];
  if(props.homeLink) {
    homeVal = ['Home: ', <a href={props.homeLink} target={'_blank'}><strong>x{props.home}</strong></a>];
  }

  return(<span>{homeVal}</span>);
};

AvatarTown.propTypes = {
  home: PropTypes.string,
  homeLink: PropTypes.string
};

/**
 * Icon for the Avatar's crafter profile.
 */
const AvatarCrafterImage = (props) => {
  return(
    <img
      src={props.imgSrc}
      alt={props.imgAlt}
      title={props.imgTitle}
    />
  )
};

AvatarCrafterImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired
};

/**
 * Component for a Crafter on the "Crafting" page. Represents an Avatar
 *  that lives in the Storm's Reach area and offers crafting services.
 */
export class Crafter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      profileImage: props.profileImage,
      home: props.home,
      homeMapLink: props.homeMapLink,
      shop: props.shop,
      craftingAbilities: props.craftingAbilities
    };
  }

  render() {

    return(
      <div className='crafter'>

        <div className='crafter-attributes'>
          <div>
            Name: <Link className='crafter-link' to='/avatars/1'>
              <strong>{this.state.name}</strong>
            </Link>
          </div>
          <div>
            <AvatarTown home={this.state.home} homeLink={this.state.homeMapLink} />
          </div>
          <div>
            <AvatarShop shop={this.state.shop} />
          </div>
          <div className='crafting-abilities'>
            Services:
            <CraftingServices abilities={this.state.craftingAbilities} />
          </div>
        </div>

        <Link className='crafter-link' to='/avatars/1'>
          <div className='crafter-image'>
            <AvatarCrafterImage
              imgSrc={this.state.profileImage}
              imgAlt={this.state.name + ' Crafter Image'}
              imgTitle={this.state.name}
            />
          </div>
        </Link>

      </div>
    );
  }

};

Crafter.propTypes= {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  home: PropTypes.string.isRequired,
  homeMapLink: PropTypes.string,
  shop: PropTypes.string,
  craftingAbilities: PropTypes.arrayOf(PropTypes.string).isRequired
}

Crafter.defaultProps = {
  name: DEFAULT_CRAFTER.NAME,
  profileImage: DEFAULT_CRAFTER.PROFILE_IMAGE_SRC,
  home: DEFAULT_CRAFTER.HOME,
  homeMapLink: null,
  shop: null,
  craftingAbilities: DEFAULT_CRAFTER.ABILITIES
}

export default Crafter;
