import React from 'react';
import { connect } from 'react-redux';
import VendorList from '../components/VendorList';

const mapStateToProps = (state) => ({
  vendors: state.vendors
});

const VendorsContainer = connect(mapStateToProps)(VendorList);

export default VendorsContainer;
