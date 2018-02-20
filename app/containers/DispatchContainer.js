import React from 'react';
import { connect } from 'react-redux';
import NewsList from '../components/NewsList';

/**
 * Connect News state to Redux data store.
 */
const mapStateToProps = (state) => ({
  newsItems: state.newsItems
});

/**
 * Higher Order Container Component for a list of NewsItem instances.
 */
const DispatchContainer = connect(mapStateToProps)(NewsList);

export default DispatchContainer;
