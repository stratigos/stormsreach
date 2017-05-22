import React from 'react';
import PropTypes from 'prop-types';
import AvatarLink from './AvatarLink';

const Rental = (props) => {
  return(
    <div className='rental'>
      <div>
        <span className='list-label'>ID:</span> {props.id}
      </div>
      <div>
        <span className='list-label'>Host:</span> <AvatarLink id={props.avatar_id} />
      </div>
      <div>
        <span className='list-label'>Town:</span> {props.town}
      </div>
      <div className='rental-location'>
        <span className='list-label'>Location:</span> {props.location}
      </div>
      <div>
        <span className='list-label'>Gold (per day):</span> <span className='rental-price'>{props.price}</span>
      </div>
      <div>
        <span className='list-label'>Size:</span> {props.size}
      </div>
      <div>
        <span className='list-label'>Basement?</span> {props.basement ? 'Yes' : 'No'}
      </div>
      <div>
        <span className='list-label'>Name:</span> {props.name}
      </div>
      <div>
        <span className='list-label'>Listed date:</span> {props.published_at}
      </div>
      <div className='rental-description'>{props.description}</div>
    </div>
  );
};

Rental.propTypes= {
  id: PropTypes.number.isRequired,
  avatar_id: PropTypes.number.isRequired,
  town: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string.isRequired,
  basement: PropTypes.bool.isRequired,
  name: PropTypes.string,
  published_at: PropTypes.string.isRequired
}

export default Rental;
