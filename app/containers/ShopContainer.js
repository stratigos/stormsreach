import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Shop from '../components/Shop';

/**
 * Get the current Shop from a list of Shops, provided by the data store.
 *  Set the Shop to `undefined` to fall back on `defaultProps`, which
 *  prevents initial `PropTypes` required error on initial load.
 */
const getCurrentShop = (shops, shopId) => {
  return shops[(shopId - 1)] || undefined;
};

/**
 * Connect Shop state to Redux data store.
 */
const mapStateToProps = (state, ownProps) => ({
  shop: getCurrentShop(state.shops, ownProps.shopId)
});

/**
 * Higher Order Container Component for an Shop.
 */
const ShopContainer = connect(mapStateToProps)(Shop);

export default ShopContainer;
