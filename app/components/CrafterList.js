import React from 'react';
import PropTypes from 'prop-types';
import Crafter from './Crafter';
import { DEFAULT_CRAFTER } from '../constants/defaults';

const CrafterList = ({ avatars }) => {
  return(
    <div className='crafter-list-container'>
      {avatars.map( (avatar) => {
        return(<Crafter key={avatar.id} {...avatar} />);
      })}
    </div>
  );
}

CrafterList.defaultProps = {
  avatars: [
  '0': {
      id: DEFAULT_CRAFTER.id,
      name: DEFAULT_CRAFTER.name,
      image: DEFAULT_CRAFTER.image,
      town: DEFAULT_CRAFTER.town,
      shop: DEFAULT_CRAFTER.shop,
      abilities: DEFAULT_CRAFTER.abilities
    }
  ]
};

CrafterList.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      town: PropTypes.string,
      shop: PropTypes.string,
      abilities: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
}

export default CrafterList;
