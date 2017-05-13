import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless Functional Component for displaying a member of the site, i.e.,
 *  an "Avatar" from SotA.
 */
const Avatar = (props) => {

  // TODO handle this in respective stateless functional components.
  let imageAttr, abilityItems = '';
  if (props.avatar) {
    imageAttr = `${props.avatar.name} Image`;
    if (props.avatar.abilities.length > 0) {
      abilityItems = props.avatar.abilities.map((ability, idx) =>
        <li key={idx} className='avatar-ability'><strong>{ability}</strong></li>
      );
    }
  }

  // TODO: Create stateless functional components out of the following JSX.
  return(
      <div className='avatar'>
        {!props.avatar || !props.avatar.id
          ? <div className='avatar-loading'><h3>Loading...</h3></div>
          :  <div>
              <div className='avatar-info'>
                <ul className='avatar-info-list'>
                  <li>Name: <strong>{props.avatar.name}</strong></li>
                  <li>Home Town: <strong>{props.avatar.town}</strong></li>
                  <li>Shop: <strong>{props.avatar.shop}</strong></li>
                  <li>
                    <span>Services:</span>
                    <ul className='avatar-services-list'>
                      {abilityItems}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='avatar-image'>
                <img
                  src={props.avatar.image}
                  alt={imageAttr}
                  title={imageAttr}
                />
              </div>
            </div>
        }
      </div>
  );

}

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
  avatarId: PropTypes.number.isRequired,
  avatar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    town: PropTypes.string.isRequired,
    shop: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default Avatar;
