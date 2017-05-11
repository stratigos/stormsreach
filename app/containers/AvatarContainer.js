import React from 'react';
import fetchAvatar from '../lib/srapi.js'
import Avatar from '../components/Avatar';
import HomepageLink from '../components/HomepageLink';

/**
 * Higher Order Container Component for the "avatar" page.
 * Fetches current site member data, and renders Avatar Component.
 */
export class AvatarContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatarId: this.props.match.params.avatarId,
      avatar: null
    }

    this._updateAvatar = () => this.updateAvatar();
  }

  /**
   * After mount, fetch the current member's info from the data API, and
   *  update the state to contain the Avatar prop values.
   */
  componentDidMount() {
    this.updateAvatar(this.state.avatarId);
  }

  /**
   * Fetch Avatar info.
   * @param aId Int Avatar ID
   */
  updateAvatar(aId) {

    this.setState(() => {
      return {
        avatarId: aId,
        avatar: null
      }
    });

    fetchAvatar(aId)
      .then((avatar) => {
        this.setState(() => {
          return {
            avatar: avatar
          }
        });
      })
      .catch((error) => {
        console.log('ERROR FETCHING AVATAR', error);
        // TODO HANDLE ERROR
      });
  }

  render() {
    let currentAvatar = this.state.avatar;

    return(
      <div className="avatar-container">
        {!currentAvatar
          ? <div><h3>Loading Avatar...</h3></div>
          : <Avatar
              name={currentAvatar.name}
              image={currentAvatar.image}
              home={currentAvatar.home}
              shop={currentAvatar.shop}
              abilities={currentAvatar.abilities}
            />
        }
        <HomepageLink />
      </div>
    );
  }

}

export default AvatarContainer;
