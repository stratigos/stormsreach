import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless Functional Component to represent a relevant piece of news derived
 *  from a SoTA Elastic Search query.
 */
const NewsItem = (props) => {
  return(
    <div className='news-item'>
      <div className='news-content'>
        {props.newsItem.content}
      </div>
    </div>
  );
};

NewsItem.defaultProps = {
  newsItem: {
    id: 0,
    content: 'Coming soon!'
  }
};

NewsItem.propTypes = {
  newsItemId: PropTypes.number,
  newsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default NewsItem;
