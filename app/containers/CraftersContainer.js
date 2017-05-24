import React from 'react';
import { connect } from 'react-redux';
import CrafterList from '../components/CrafterList';


/**
 * Connect Avatar state to Redux data store.
 */
const mapStateToProps = (state) => ({
  avatars: state.avatars
});

/**
 * Higher Order Container Component for a list of Crafters.
 */
const CraftersContainer = connect(mapStateToProps)(CrafterList);

export default CraftersContainer;
