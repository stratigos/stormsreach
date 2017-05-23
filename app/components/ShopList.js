import React from 'react';
import PropTypes from 'prop-types';
import Shop from './Shop';

const ShopList = ({ shops }) => {
  return(
    <div className='crafter-list-container'>
      {shops.map( (shop) => {
        return(<Shop key={shop.id} shop={shop} />);
      })}
    </div>
  );
};

ShopList.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_id: PropTypes.number,
      vendor_id: PropTypes.number,
      name: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      image: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      size: PropTypes.string.isRequired,
      basement: PropTypes.bool.isRequired,
      published_at: PropTypes.string.isRequired
    })
  )
};

export default ShopList;
