import React from 'react';
import PropTypes from 'prop-types';
import Rental from './Rental';

const RentalList = ({ rentals }) => {
  return(
    <div className='crafter-list-container'>
      {rentals.map( (rental) => {
        return(<Rental key={rental.id} {...rental} />);
      })}
    </div>
  );
};

RentalList.propTypes = {
  rentals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_id: PropTypes.number,
      avatar_name: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      location: PropTypes.string,
      description: PropTypes.string,
      size: PropTypes.string.isRequired,
      basement: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      published_at: PropTypes.string.isRequired
    })
  )
};

export default RentalList;
