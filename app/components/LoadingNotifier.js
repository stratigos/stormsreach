/******************************************************************************
 * Component to display graphical/UI info to the user denoting data is being
 *  fetched. Displays an animation or text denoting "Loading...".
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSS_HIDDEN } from '../constants/defaults';

const LoadingNotifier = (props) => {
  // Note, expand to `https://github.com/JedWatson/classnames` for
  //  conditionally deriving the `className` attr, if complexity
  //  grows beyond a single ternary assignment for `hidden`;
  let _klassName = props.loading ? 'loading' : 'hidden';

  return(
    <div className='loading-notifier-container'>
      <div className={_klassName}>
        Summoning information...
      </div>
    </div>
  );
};

LoadingNotifier.defaultProps = {
  loading: false
};

LoadingNotifier.propTypes = {
  loading: PropTypes.bool
};

/**
 * Manage "loading" state with Redux, to update along with API requests and
 *  other fetchings of datas.
 */
function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps, null)(LoadingNotifier);
