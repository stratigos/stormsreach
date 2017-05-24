import React from 'react';
import PropTypes from 'prop-types';
import AvatarLink from './AvatarLink';

/**
 * Displays an Avatar's image.
 */
const AvatarImage = (props) => {
  return(
    <img
      src={props.imgSrc}
      alt={props.imgAlt}
      title={props.imgTitle}
    />
  );
};

AvatarImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired
};

/**
 * Wrap an AvatarImage with an AvatarLink.
 */
const AvatarImageLink = (props) => {
  let avatarImgLink = null;

  if (props.id && props.image.length > 0 && props.name.length > 0) {
    avatarImgLink = <AvatarLink id={props.id}>
      <AvatarImage imgSrc={props.image} imgAlt={`${props.name} Image`} imgTitle={props.name} />
    </AvatarLink>;
  }

  return avatarImgLink;
};

AvatarImageLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
};

/**
 * Handle optional display of services/crafting abilities.
 */
const AvatarAbilitiesList = (props) => {
  let abilitiesList = null;

  if (props.abilities.length > 0) {
    abilitiesList = props.abilities.map((ability, idx) =>
      <li key={idx} className='avatar-ability'><strong>{ability}</strong></li>
    );
    abilitiesList = <ul className='avatar-services-list'>{abilitiesList}</ul>;
  }

  return abilitiesList;
}

/**
 * Stateless Functional Component for displaying a member of the site, i.e.,
 *  an "Avatar" from SotA.
 */
const Avatar = (props) => {
  return(
    <div className='avatar'>
      <div className='avatar-attributes'>
        <div>
          <span className='list-label'>Name:</span> <AvatarLink id={props.avatar.id} />
        </div>
        <div>
          <span className='list-label'>Town:</span> {props.avatar.town}
        </div>
        <div>
          <span className='list-label'>Shop:</span> <em>coming soon!</em>
        </div>
        <div>
          <span className='list-label'>Vendor:</span> <em>coming soon!</em>
        </div>
        <div className='avatar-abilities'>
          <span className='list-label'>Services:</span>
          <AvatarAbilitiesList abilities={props.avatar.abilities} />
        </div>
      </div>
      <div className='avatar-image'>
        <AvatarImageLink id={props.avatar.id} name={props.avatar.name} image={props.avatar.image} />
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  avatar: {
    id: 0,
    name: 'Loading',
    image: undefined,
    town: "Storm's Reach",
    shop: undefined,
    abilities: []
  }
};

Avatar.propTypes = {
  avatarId: PropTypes.number,
  avatar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    town: PropTypes.string.isRequired,
    shop: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Avatar;
