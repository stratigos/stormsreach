import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AvatarLink from './AvatarLink';
import ShopLink from './ShopLink';
import VendorLink from './VendorLink';

/**
 * Handle logic for displaying link to Shop page.
 * @return
 *  JSX String if currently on a Shop page.
 *  JSX ShopLink if elsewhere in the app.
 */
const displayNameOrLink = (shop_name, shop_id, currentUri) => {
  return /\/?shops\/\d+\/?/.test(currentUri)
    ? <strong>{shop_name}</strong>
    : <ShopLink id={shop_id} />;
};

/**
 * Handle logic for optional image display.
 */
const displayImage = (image) => {
  return image !== undefined && image.length > 0
    ? <div className='shop-image'><img src={image} alt={`${name} Image`} /></div>
    : '';
};

/**
 * Handle optional VendorLink display.
 */
const displayVendor = (vendor_id) => {
  return vendor_id !== undefined
    ? <div><span className='list-label'>Vendor:</span> <VendorLink id={vendor_id} /></div>
    : '';
};

/**
 * Functional component for composing Shop data.
 */
const Shop = (props) => {

  let nameOrLink = displayNameOrLink(props.shop.name, props.shop.id, props.location.pathname);
  let shopImg  = displayImage(props.shop.image, props.shop.name);
  let vendor   = displayVendor(props.shop.vendor_id);

  return(
    <div className='shop'>
      {shopImg}
      <div>
        <span className='list-label'>Name:</span> {nameOrLink}
      </div>
      <div>
        <span className='list-label'>Host:</span> <AvatarLink id={props.shop.avatar_id} />
      </div>
      {vendor}
      <div>
        <span className='list-label'>Town:</span> {props.shop.town}
      </div>
      <div className='shop-location'>
        <span className='list-label'>Location:</span> {props.shop.location}
      </div>
      <div>
        <span className='list-label'>Lot Size:</span> {props.shop.size}
      </div>
      <div>
        <span className='list-label'>Basement Access?</span> {props.basement ? 'Yes' : 'No'}
      </div>
      <div>
        <span className='list-label'>Listed date:</span> {props.shop.published_at}
      </div>
      <div className='shop-description'>{props.shop.description}</div>
    </div>
  );
};

Shop.defaultProps = {
  shop: {
    id: 0,
    avatar_id: undefined,
    shop_id: undefined,
    name: 'Loading',
    image: undefined,
    town: "Storm's Reach",
    location: '',
    description: '',
    size: '',
    basement: false,
    published_at: ''
  }
};

Shop.propTypes= {
  shopId: PropTypes.number.isRequired,
  shop: PropTypes.shape({
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
  }).isRequired
};

/**
 * Export as HoC `withRouter` to allow Router to supply `location` to
 *  the Shop Component.
 */
export default withRouter(Shop);
