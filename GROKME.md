# StormsReach Application Specs

* :package: [View package](package.json)
* :briefcase: [View bundler configuration](webpack.config.js)
* :construction_worker: Under Construction

ReactJS
-------
 * :sparkle: v 16.2.0
 * Modularized and composable.
   * For presentation, I favor [stateless functional components](https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/), such as **[Avatar](app/components/Avatar.js)** or **[Rental](app/components/Rental.js)**.
   * I like to encapsulate UI state management and flow with [Higher-Order Containers](https://facebook.github.io/react/docs/higher-order-components.html) or Components, like **[CraftersContainer](app/containers/CraftersContainer.js)** or **[AvatarContainer](app/containers/AvatarContainer.js)**.

Redux
-----
 * :truck: v 3.7.2
 * [Flux Standard Action](https://github.com/acdlite/flux-standard-action) pattern is enforced through [ActionCreators](http://redux.js.org/docs/basics/Actions.html#action-creators), like **[fetchAvatars](app/actions/fetch_avatars.js)**.
 * Data is not mutated, but diff'd and dispatched with Reducers like **[avatarsReducer](app/reducers/avatars_reducer.js)**.
 * I handle integrating with external data sources through an **[apiMiddleware](app/middlewares/api_middleware.js)**.
   * Currently, API requests respond from static files until corresponding back end developed.  
See [Coming Soon](#coming-soon) below.

Tests
-----
* :computer: `npm run test`
  * This is my first major foray into testing a React and Redux application.  
 While I have extensive experience with testing frameworks like RSpec,  
 Minitest, Mocha, or PHPUnit, I am exercising a chance to gain new experience  
 with testing JavaScript applications.  
  * I also learn JS testing practices from local meetups and hackatons in NYC,
and contributing to the [Mozilla Firefox Debugger](https://github.com/stratigos/debugger.html)
 (an open source application in *React*).
* Facebook's [Jest](https://github.com/facebook/jest)
* Air BnB's [enzyme](https://github.com/airbnb/enzyme)
* Pivotal Labs' [Jasmine](https://jasmine.github.io/)

Performance Optimizations
-------------------------
 * :running: DNS Prefetching
   * Used for external partners and dependencies, like my Image CDN.
 * :speedboat: HTTP header `Transfer-Encoding: chunked`
   * Mitigates potential TCP Slow Start issues in spotty or unstable networks.

CSS Flexbox
-----------
* :ribbon: [View style source](app/assets/stylesheets/index.scss)
* :warning: Theme TBD. While I am not a designer by profession, I can follow  
along with a sophisticated CSS framework as good as any. For now I am using  
CSS Flexbox to keep layouts simple, and plan to iterate on the UI once the  
site functionality is closer to completion. While keeping up with JavaScript  
libraries is hard, I am currently considering the following libraries:
  * [Elemental UI](http://elemental-ui.com/)
  * [Material UI](http://www.material-ui.com/#/)
  * [Grommet](https://grommet.github.io/docs/)

Heroku
------
* :shipit: Free dyno, may take 10-30s to wake from sleep.
* Simple NodeJS and Express [server application](server.js) sends all requests to React Router.

Coming Soon
-----------

* :neckbeard: Back end content management application tentatively written with  
the [Phoenix](http://www.phoenixframework.org/) framework, in [Elixir](http://elixir-lang.org/).  
  * After working for a decade with the Object Oriented paradigm, I am  curious as  
to how well the Functional Programming paradigm with Elixir harmonizes  with  
the functional nature of JavaScript.

----

View application [README](README.md) and [LICENSE](LICENSE) information.

## Thank you!
