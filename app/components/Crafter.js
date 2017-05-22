import React from 'react';
import PropTypes from 'prop-types';
import AvatarLink from './AvatarLink';
import { DEFAULT_CRAFTER } from '../constants/defaults';

/**
 * SFC to list items in list of abilities/services.
 */
const CraftingServices = (props) => {
  let abilityItems = '';
  if(props.abilities.length > 0) {
    abilityItems = props.abilities.map((ability, idx) =>
      <li key={idx} className='crafter-ability'><strong>{ability}</strong></li>
    );
  }

  return(<ul className='crafter-abilities'>{abilityItems}</ul>);
};

CraftingServices.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string)
};

/**
 * SFC to optionally display Avatar's shop.
 */
const AvatarShop = (props) => {
  let shop = '';
  if(props.shop) {
    shop = <strong>{props.shop}</strong>;
  }

  return(<span>{shop}</span>);
};

AvatarShop.propTypes = {
  shop: PropTypes.string
};

/**
 * SFC to optionally display Avatar's hometown.
 */
const AvatarTown = (props) => {
  let town = '';
  if(props.town) {
    town = <strong>{props.town}</strong>;
  }
  return(<span>{town}</span>);
};

AvatarTown.propTypes = {
  town: PropTypes.string
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
  );
};

AvatarCrafterImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired
};

/**
 * Wrap the crafter image with a link to the Avatar page.
 */
const AvatarCrafterImageLink = (props) => {
  let crafterImage = <div className='crafter-image'>
    <AvatarCrafterImage
      imgSrc={props.image}
      imgAlt={`${props.name} Crafter Image`}
      imgTitle={props.name}
    />
  </div>;

  if(props.id) {
    crafterImage = <AvatarLink id={props.id}>{crafterImage}</AvatarLink>
  }

  return(crafterImage);
};

AvatarCrafterImageLink.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

/**
 * Component for a Crafter on the "Crafting" page. Represents an Avatar
 *  that lives in the Storm's Reach area and offers crafting services.
 */
const Crafter = (props) => {
  return(
    <div className='crafter'>

      <div className='crafter-attributes'>
        <div>
          Name: <AvatarLink id={props.id} />
        </div>
        <div>
          Town: <AvatarTown town={props.town} />
        </div>
        <div>
          Shop: <AvatarShop shop={props.shop} />
        </div>
        <div className='crafting-abilities'>
          Services:
          <CraftingServices abilities={props.abilities} />
        </div>
      </div>

      <AvatarCrafterImageLink id={props.id} name={props.name} image={props.image} />

    </div>
  );
};

Crafter.defaultProps = {
  id: undefined,
  name: DEFAULT_CRAFTER.name,
  image: DEFAULT_CRAFTER.image,
  town: DEFAULT_CRAFTER.town,
  shop: undefined,
  abilities: DEFAULT_CRAFTER.abilities
}

Crafter.propTypes= {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  town: PropTypes.string,
  shop: PropTypes.string,
  abilities: PropTypes.arrayOf(PropTypes.string)
}

export default Crafter;
