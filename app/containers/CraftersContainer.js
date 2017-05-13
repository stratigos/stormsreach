import React from 'react';
import { connect } from 'react-redux';
import CrafterList from '../components/CrafterList';
import { DEFAULT_CRAFTER } from '../constants/defaults';

/**
 * Merge current state of Avatars with a default crafter, which typically
 *  contains data to call the user to join.
 */
const getCurrentAvatars = (avatars, default_avatar = {}) => {
  return avatars.concat({
    id: default_avatar.id,
    name: default_avatar.name,
    image: default_avatar.image,
    town: default_avatar.town,
    shop: default_avatar.shop,
    abilities: default_avatar.abilities
  });
}

/**
 * Connect Avatar state to Redux data store.
 */
const mapStateToProps = (state) => ({
  avatars: getCurrentAvatars(state.avatars, DEFAULT_CRAFTER)
});

/**
 * Higher Order Container Component for a list of Crafters.
 */
const CraftersContainer = connect(mapStateToProps)(CrafterList);

export default CraftersContainer;
