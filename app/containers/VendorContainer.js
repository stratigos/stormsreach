import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vendor from '../components/Vendor';

/**
 * Get the current Vendor from a list of Vendors, provided by the data store.
 *  Set the Vendor to `undefined` to fall back on `defaultProps`, which
 *  prevents initial `PropTypes` required error on initial load.
 */
const getCurrentVendor = (vendors, vendorId) => {
  return vendors[(vendorId - 1)] || undefined;
};

/**
 * Connect Vendor state to Redux data store.
 */
const mapStateToProps = (state, ownProps) => ({
  vendor: getCurrentVendor(state.vendors, ownProps.vendorId)
});

/**
 * Higher Order Container Component for an Vendor.
 */
const VendorContainer = connect(mapStateToProps)(Vendor);

export default VendorContainer;
