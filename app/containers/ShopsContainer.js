import React from 'react';
import { connect } from 'react-redux';
import ShopList from '../components/ShopList';

const mapStateToProps = (state) => ({
  shops: state.shops
});

const ShopsContainer = connect(mapStateToProps)(ShopList);

export default ShopsContainer;
