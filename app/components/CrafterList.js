import React from 'react';
import PropTypes from 'prop-types';
import AvatarContainer from '../containers/AvatarContainer';

const CrafterList = ({ avatars }) => {
  return(
    <div className='crafter-list-container'>
      {avatars.map( (avatar) => {
        return(<AvatarContainer key={avatar.id} avatarId={avatar.id} />);
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
