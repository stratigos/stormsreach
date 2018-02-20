import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';

/**
 * Get the current NewsItem from a list, provided by the data store.
 *  Set the Shop to `undefined` to fall back on `defaultProps`, which
 *  prevents initial `PropTypes` required error on initial load.
 */
const getCurrentContent = (newsItems, newsItemId) => {
  return newsItems[newsItemId] || undefined;
};

/**
 * Connect NewsItem state to Redux data store.
 */
const mapStateToProps = (state, ownProps) => ({
  content: { } // getCurrentContent(state.newsItems, ownProps.newsItemId) // TODO implement NewsReducer...
});

/**
 * Higher Order Container Component for a NewsItem.
 */
const NewsItemContainer = connect(mapStateToProps)(NewsItem);

export default NewsItemContainer;
