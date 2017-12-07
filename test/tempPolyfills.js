/******************************************************************************
* Add Polyfills here until associated dependency issues are resolved upstream.
*******************************************************************************/

/**
 * Stop React v>=16.0 from erroring with warnings about missing
 *  `requestAnimationFrame` library, which is not used or included with the
 *  test application.
 * @see [jest #4545](https://github.com/facebook/jest/issues/4545)
 */
const rAF = global.requestAnimationFrame = (someCallback) => {
  setTimeout(someCallback, 0);
};

export default rAF;
