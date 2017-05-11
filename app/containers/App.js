import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import Housing from './Housing';
import Crafting from './Crafting';
import Community from './Community';
import About from '../components/About';
import Donate from './Donate';
import UserProfile from './UserProfile';
import AvatarContainer from './AvatarContainer';

/**
 * Main application Component.
 */
class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className='app-container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} placeholderProp='Hello!' />
            <Route path='/housing' component={Housing} />
            <Route path='/crafting' component={Crafting} />
            <Route path='/community' component={Community} />
            <Route path='/community' component={Community} />
            <Route path='/about' component={About} />
            <Route path='/donate' component={Donate} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/avatars/:avatarId' component={AvatarContainer} />
            <Route render={() => {
              // Create a HoC/ContainerComponent which sends HTTP Status 404
              //  and returns a `<NotFound />` Component.
              return (
                <p>Page Not Found!</p>
              );
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
