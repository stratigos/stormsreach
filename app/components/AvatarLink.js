/******************************************************************************
 * Reusable component for linking to an Avatar page. If Avatar has no `id`
 *  property, display name as text or passed child JSX instead.
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DEFAULT_AVATAR_LINK_TEXT } from '../constants/defaults';

export const AvatarLink = (props) => {

  let nameWithLink = (props.children !== undefined)
    ? props.children
    : <strong>{props.name}</strong>;

  if(props.id) {
    nameWithLink = <Link className='avatar-page-link' to={`/avatars/${props.id}`}>{nameWithLink}</Link>;
  }

  return(nameWithLink);
};

AvatarLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

/**
 * Derive the Avatar's name, used as the child text for the Link, from the
 *  current Avatar ID. This allows calling components to require less state
 *  (i.e., the Avatar name isn't needed, just the ID).
 */
export const getAvatarNameFromId = (avatars, avatar_id) => {
  return (avatars[(avatar_id - 1)] !== undefined)
    ? avatars[(avatar_id - 1)].name
    : DEFAULT_AVATAR_LINK_TEXT;
};

const mapStateToProps = (state, ownProps) => ({
  name: getAvatarNameFromId(state.avatars, ownProps.id)
});

export default connect(mapStateToProps)(AvatarLink);
