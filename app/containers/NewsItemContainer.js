import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';

const getCurrentNewsItem = (newsItems, newsItemId) => {
  let newsItemContainer = newsItems.find(element => element.newsItemId == newsItemId);

  return newsItemContainer.newsItem;
};

const mapStateToProps = (state, ownProps) => ({
  newsItem: getCurrentNewsItem(state.newsItems, ownProps.newsItemId)
});

const NewsItemContainer = connect(mapStateToProps)(NewsItem);

export default NewsItemContainer;
