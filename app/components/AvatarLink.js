/******************************************************************************
 * Reusable component for linking to an Avatar page. If Avatar has no `id`
 *  property, display name as text or passed child JSX instead.
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AvatarLink = (props) => {

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
  name: PropTypes.string.isRequired
};

export default AvatarLink;
