import React from 'react';
import PropTypes from 'prop-types';

/**
 * Higher Order Container Component for "home page" Components.
 */
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      placeholderProp: props.placeholderProp
    };
  }

  render() {
    return(
      <div>
        {this.state.placeholderProp} Welcome to stormsreach.com! The online community for the greater Bay of Storms and
        Elysium isles area.
      </div>
    );
  }

}

Home.propTypes = {
  placeholderProp: PropTypes.string.isRequired
};

Home.defaultProps = {
  placeholderProp: 'Howdy!'
};

export default Home;
