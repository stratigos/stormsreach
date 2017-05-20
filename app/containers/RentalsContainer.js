import React from 'react';
import { connect } from 'react-redux';
import RentalList from '../components/RentalList';

const mapStateToProps = (state) => ({
  rentals: state.rentals
});

const RentalsContainer = connect(mapStateToProps)(RentalList);

export default RentalsContainer;
