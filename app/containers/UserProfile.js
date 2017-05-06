import React from 'react';
import HomepageLink from '../components/HomepageLink';

/**
 * Higher Order Container Component for the "User Profile" page.
 * - Users not yet implemented, TBD.
 */
export class UserProfile extends React.Component {

  render() {
    return(
      <div className='user-profile-container'>
        <p>
          Coming soon: user accounts, and profile pages!
        </p>
        <HomepageLink />
      </div>

    );
  }

}

export default UserProfile;
