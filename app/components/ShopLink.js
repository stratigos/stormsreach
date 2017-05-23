/******************************************************************************
 * Reusable component for linking to an Shop page. If Shop has no `id`
 *  property, display name as text or passed child JSX instead.
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DEFAULT_SHOP_LINK_TEXT } from '../constants/defaults';

const ShopLink = (props) => {

  let nameWithLink = (props.children !== undefined)
    ? props.children
    : <strong>{props.name}</strong>;

  if(props.id) {
    nameWithLink = <Link className='shop-page-link' to={`/shops/${props.id}`}>{nameWithLink}</Link>;
  }

  return(nameWithLink);
};

ShopLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string
};

/**
 * Derive the Shop's name, used as the child text for the Link, from the
 *  current Shop ID. This allows calling components to require less state
 *  (i.e., the Shop name isn't needed, just the ID).
 */
const getShopNameFromId = (shops, shop_id) => {
  return (shops[(shop_id - 1)] !== undefined)
    ? shops[(shop_id - 1)].name
    : DEFAULT_SHOP_LINK_TEXT;
};

const mapStateToProps = (state, ownProps) => ({
  name: getShopNameFromId(state.shops, ownProps.id)
});

export default connect(mapStateToProps)(ShopLink);
