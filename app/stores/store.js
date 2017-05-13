import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'; // reducers/index.js
// import nullMiddleware from '../middlewares/null_middleware';
// import errorMiddleware from '../middlewares/error_middleware';
// import debounceMiddleware from '../middlewares/debounce_middleware';
// import logMiddleware from '../middlewares/log_middleware';
// import analyticsMiddleware from '../middlewares/analytics_middleware';
// import measureMiddleware from '../middlewares/measure_middleware';
import apiMiddleware from '../middlewares/api_middleware';

/**
 * Create an array of Middleware instances which can be modified at runtime.
 */
const middleWares = [
  // nullMiddleware,
  // errorMiddleware,
  // debounceMiddleware,
  // errorMiddleware,
  // logMiddleware,
  apiMiddleware
];

// // Conditionally modify middleware stack.
// if(process.env.NODE_ENV === 'development') {
//   middleWares.push(measureMiddleware);
// } else {
//   middleWares.push(analyticsMiddleware);
// }

/**
 * Create a data store from the root reducer, and middlewares such as logging.
 *  The initial application state, which could be defined as the 2nd of 3
 *  arguments for `applyMiddleware()`, is derived from an API call from some
 *  back end / server.
 * @see `apiMiddleware`
 */
const store = createStore(
  reducer,
  applyMiddleware(...middleWares)
);

export default store;
