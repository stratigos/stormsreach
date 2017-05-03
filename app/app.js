import React from 'react'
import ReactDOM from 'react-dom'
require('./index.css')

/**
 * Define component.
 */
class App extends React.Component {
  render() {
    return(
      <div>
        Welcome to stormsreach.com! The online community for the greater Bay of Storms and Elysium isles area.
      </div>
    )
  }
}

/**
 * Render component to the DOM.
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
