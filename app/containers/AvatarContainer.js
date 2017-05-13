import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';

/**
 * Get the current Avatar from a list of Avatars, provided by the data store.
 *  Set the Avatar to `undefined` to fall back on `defaultProps`, which
 *  prevents initial `PropTypes` required error on initial load.
 */
const getCurrentAvatar = (avatars, avatarId) => {
  return avatars[(avatarId - 1)] || undefined;
};

/**
 * Connect Avatar state to Redux data store.
 */
const mapStateToProps = (state, ownProps) => ({
  avatar: getCurrentAvatar(state.avatars, ownProps.avatarId)
});

/**
 * Higher Order Container Component for an Avatar.
 */
const AvatarContainer = connect(mapStateToProps)(Avatar);

export default AvatarContainer;
