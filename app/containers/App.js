// Application bindings and dependencies.
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Application Containers and Components.
import AboutPage from '../components/AboutPage';
import AvatarPage from '../components/AvatarPage';
import CommunityPage from '../components/CommunityPage';
import CraftersPage from '../components/CraftersPage';
import CraftingPage from '../components/CraftingPage';
import RentalsPage from '../components/RentalsPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import LoadingNotifier from '../components/LoadingNotifier';
import NotFound from '../components/NotFound';

// Note: these arent "real" containers, just placeholders for conversion to
//  a Redux app, awaiting implementation.
import Donate from './Donate';
import UserProfile from './UserProfile';

/**
 * Main application Component. Data store is passed into `App` from wrapper
 *  `Provider` Component from Redux.
 */
const App = () => {
  // Route handlers are given access to the central data store through
  //  the `Provider` Higher Order Container Component from Redux.
  return(
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <LoadingNotifier />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/housing' component={RentalsPage} />
          <Route exact path='/crafting' component={CraftingPage} />
          <Route path='/crafting/crafters' component={CraftersPage} />
          <Route path='/community' component={CommunityPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/donate' component={Donate} />
          <Route path='/profile' component={UserProfile} />
          <Route path='/avatars/:avatarId' component={AvatarPage} />
          <Route path='*' status={404} component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
