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
    id: '0',
    content: 'Loading'
  }
};

NewsItem.propTypes = {
  newsItemId: PropTypes.string,
  newsItem: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string
  })
};

export default NewsItem;
