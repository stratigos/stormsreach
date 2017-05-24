import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const CrafterList = ({ avatars }) => {
  return(
    <div className='crafter-list-container'>
      {avatars.map( (avatar) => {
        return(<Avatar key={avatar.id} avatarId={avatar.id} avatar={avatar} />);
      })}
    </div>
  );
}

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
