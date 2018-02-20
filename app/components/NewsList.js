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
        return(<NewsItemContainer key={newsItem.id} newsItemId={newsItem.id} />);
      })}
    </div>
  );
};

NewsList.defaultProps = {
  newsItems: [
    {
      id: 0,
      content: 'Searching for news &hellip;'
    }
  ]
};

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string.isRequired
    })
  )
};

export default NewsList;
