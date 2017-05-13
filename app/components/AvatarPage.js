/******************************************************************************
 * Component for composing the Avatar page.
 ******************************************************************************/

import React from 'react';
import AvatarContainer from '../containers/AvatarContainer';
import HomepageLink from './HomepageLink';

const AvatarPage = (props) => {
  return(
    <div className="avatar-container">
      <AvatarContainer avatarId={Number(props.match.params.avatarId)} />
      <HomepageLink />
    </div>
  );
};

export default AvatarPage;
