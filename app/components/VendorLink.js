/******************************************************************************
 * Reusable component for linking to an Vendor page. If Vendor has no `id`
 *  property, display name as text or passed child JSX instead.
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DEFAULT_VENDOR_LINK_TEXT } from '../constants/defaults';

const VendorLink = (props) => {

  let nameWithLink = (props.children !== undefined)
    ? props.children
    : <strong>{props.name}</strong>;

  if(props.id) {
    nameWithLink = <Link className='vendor-page-link' to={`/vendors/${props.id}`}>{nameWithLink}</Link>;
  }

  return(nameWithLink);
};

VendorLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string
};

/**
 * Derive the Vendor's name, used as the child text for the Link, from the
 *  current Vendor ID. This allows calling components to require less state
 *  (i.e., the Vendor name isn't needed, just the ID).
 */
const getVendorNameFromId = (vendors, vendor_id) => {
  return (vendors[(vendor_id - 1)] !== undefined)
    ? vendors[(vendor_id - 1)].name
    : DEFAULT_VENDOR_LINK_TEXT;
};

const mapStateToProps = (state, ownProps) => ({
  name: getVendorNameFromId(state.vendors, ownProps.id)
});

export default connect(mapStateToProps)(VendorLink);
