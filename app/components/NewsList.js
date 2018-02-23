import React from 'react';
import PropTypes from 'prop-types';
import NewsItemContainer from '../containers/NewsItemContainer';

/**
 * List of generic type "News" items - events pulled from Elastic Search
 */
const NewsList = ({ newsItems }) => {
  return(
    <div className='news-list-container'>
      {newsItems.map( (newsItem) => {
        return(<NewsItemContainer key={newsItem.newsItem.id} newsItemId={newsItem.newsItem.id} />);
      })}
    </div>
  );
};

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string
    })
  )
};

export default NewsList;
